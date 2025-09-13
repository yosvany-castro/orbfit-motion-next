"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

// -----------------------------
// Utilidades de animación
// -----------------------------
function easeInThenLinear(t) {
  // Lento al principio (~30%), luego lineal
  const pivot = 0.3;
  if (t <= pivot) {
    const x = t / pivot; // 0..1
    // Suavizado de entrada (cuadrático) y reescalado a [0, pivot]
    return x * x * pivot;
  }
  // Tramo lineal desde pivot hasta 1
  const rest = (t - pivot) / (1 - pivot); // 0..1
  return pivot + rest * (1 - pivot);
}

function animateScrollLeft(el, from, to, duration, onUpdate, shouldStop) {
  return new Promise((resolve) => {
    let rafId;
    const start = performance.now();

    const step = (now) => {
      // Cancelación inmediata si hay hover/touch o pausa
      if (shouldStop && shouldStop()) {
        if (rafId) cancelAnimationFrame(rafId);
        resolve("cancel");
        return;
      }

      const t = Math.min(1, (now - start) / duration);
      const eased = easeInThenLinear(t);
      const value = from + (to - from) * eased;
      el.scrollLeft = value;
      if (onUpdate) onUpdate(value);

      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        resolve("done");
      }
    };

    rafId = requestAnimationFrame(step);
  });
}

// -----------------------------
// Tarjeta del carrusel
// -----------------------------
function CarouselCard({ src, index, scrollProgress, totalImages }) {
  const cardPosition = index / totalImages;

  const distance = useTransform(scrollProgress, (value) => {
    let dist = Math.abs(cardPosition - value);
    if (dist > 0.5) dist = 1 - dist;
    return dist;
  });

  const scale = useTransform(distance, [0, 0.15, 0.5], [1, 0.85, 0.75]);
  const opacity = useTransform(distance, [0, 0.3, 0.5], [1, 0.8, 0.5]);
  const grayscale = useTransform(distance, [0, 0.05, 0.1, 0.5], [0, 0.3, 1, 1]);
  const blur = useTransform(distance, [0, 0.2, 0.4, 0.5], [0, 0, 1, 2]);
  const rotateY = useTransform(distance, [0, 0.2, 0.5], [0, -15, -25]);

  return (
    <motion.div
      className="relative flex-shrink-0 px-4"
      style={{
        scale,
        opacity,
        rotateY,
        filter: useTransform(
          [grayscale, blur],
          ([g, b]) => `grayscale(${g}) blur(${b}px)`
        ),
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative w-[280px] h-[380px] md:w-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl bg-gray-100">
        <Image
          src={src}
          alt={`Carousel image ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, 350px"
          priority={index < 3}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

// -----------------------------
// Carrusel principal
// -----------------------------
export default function SimpleCarousel({ images }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Control del autoplay por pasos
  const autoplayTimerRef = useRef(null);
  const pauseTimeoutRef = useRef(null); // pausa tras scroll manual (solo si no hay hover/touch)
  const isUnmountedRef = useRef(false);

  // Estados de interacción
  const isHoveringRef = useRef(false);
  const isTouchingRef = useRef(false);

  // Dimensiones
  const [cardDimensions, setCardDimensions] = useState({
    width: 350,
    totalWidth: 350 + 32,
  });
  useEffect(() => {
    const calculateDimensions = () => {
      const isMobile = window.innerWidth < 768;
      const width = isMobile ? 280 : 350;
      const gap = 32;
      setCardDimensions({ width, totalWidth: width + gap });
    };
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  const scrollProgress = useMotionValue(0);
  const extendedImages = [...images, ...images, ...images];

  // Helpers de posición/índice
  const setWidth = () => images.length * cardDimensions.totalWidth;
  const middleOffset = () => setWidth();

  const updateProgressFromScrollLeft = (scrollLeft) => {
    const sw = setWidth();
    const progress = ((scrollLeft - sw) % sw) / sw;
    scrollProgress.set(progress);
  };

  const getNearestIndex = () => {
    const el = scrollRef.current;
    if (!el) return 0;
    const sw = setWidth();
    const tw = cardDimensions.totalWidth;
    const raw = (el.scrollLeft - sw) / tw; // índice flotante relativo al set medio
    return Math.round(raw);
  };

  const snapToIndex = (k) => {
    const el = scrollRef.current;
    if (!el) return;
    const target = middleOffset() + k * cardDimensions.totalWidth;
    el.scrollLeft = target;
    updateProgressFromScrollLeft(target);
  };

  // Inicializa centrado
  useEffect(() => {
    if (
      scrollRef.current &&
      !isInitialized &&
      cardDimensions.totalWidth > 0 &&
      images.length > 0
    ) {
      scrollRef.current.scrollLeft = middleOffset();
      updateProgressFromScrollLeft(scrollRef.current.scrollLeft);
      setIsInitialized(true);
    }
  }, [isInitialized, images.length, cardDimensions]);

  // Autoplay: 1s de espera inicial; movimiento con easing; pausa centrada 0.6s; reanuda si no hay interacción
  const runAutoplayStep = async () => {
    if (
      !scrollRef.current ||
      !isInitialized ||
      isPaused ||
      isUnmountedRef.current
    )
      return;

    const el = scrollRef.current;
    const tw = cardDimensions.totalWidth;

    // Asegura set medio y alinea al índice más cercano
    const nearest = getNearestIndex();
    snapToIndex(((nearest % images.length) + images.length) % images.length);

    const from = el.scrollLeft;
    const targetIndex = nearest + 1; // siguiente tarjeta
    const to = middleOffset() + targetIndex * tw;

    const durationMs = 1400;

    const result = await animateScrollLeft(
      el,
      from,
      to,
      durationMs,
      updateProgressFromScrollLeft,
      () =>
        isPaused ||
        isHoveringRef.current ||
        isTouchingRef.current ||
        isUnmountedRef.current
    );

    if (result === "cancel" || isUnmountedRef.current) return; // detener cadena si se canceló

    // Pausa centrada 0.6s (solo si no hay interacción)
    await new Promise((r) => {
      if (isHoveringRef.current || isTouchingRef.current || isPaused)
        return r();
      autoplayTimerRef.current = setTimeout(r, 600);
    });

    if (
      isHoveringRef.current ||
      isTouchingRef.current ||
      isPaused ||
      isUnmountedRef.current
    )
      return;

    // Normaliza y continúa
    const nextK =
      ((targetIndex % images.length) + images.length) % images.length;
    snapToIndex(nextK);

    autoplayTimerRef.current = setTimeout(() => {
      runAutoplayStep();
    }, 0);
  };

  // Orquestador del autoplay: inicia 1s después de estar listo
  useEffect(() => {
    if (!isInitialized || images.length === 0) return;

    if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    autoplayTimerRef.current = setTimeout(() => {
      if (!isPaused && !isHoveringRef.current && !isTouchingRef.current)
        runAutoplayStep();
    }, 1000);

    return () => {
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, isPaused, images.length, cardDimensions.totalWidth]);

  // Limpieza al desmontar
  useEffect(() => {
    return () => {
      isUnmountedRef.current = true;
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Scroll manual del usuario
  const handleScroll = () => {
    if (!scrollRef.current || !isInitialized) return;

    const el = scrollRef.current;
    const sw = setWidth();
    let sl = el.scrollLeft;

    // Bucle infinito en scroll manual
    if (sl >= sw * 2.2) {
      sl -= sw;
      el.scrollLeft = sl;
    } else if (sl <= sw * 0.8) {
      sl += sw;
      el.scrollLeft = sl;
    }

    updateProgressFromScrollLeft(el.scrollLeft);

    // Pausa mientras haya hover o touch; sin temporizador
    if (isHoveringRef.current || isTouchingRef.current) {
      setIsPaused(true);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      return;
    }

    // Si no hay hover/touch, aplica una pausa temporal de 3s y luego reanuda
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      const nearest = getNearestIndex();
      snapToIndex(((nearest % images.length) + images.length) % images.length);
      if (!isHoveringRef.current && !isTouchingRef.current) runAutoplayStep();
    }, 3000);
  };

  // Eventos mouse/rueda
  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY * 0.5;
    }
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    setIsPaused(true);
    // Cancela cualquier temporizador en curso
    if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    setIsPaused(false);
    const nearest = getNearestIndex();
    snapToIndex(((nearest % images.length) + images.length) % images.length);
    runAutoplayStep();
  };

  // Eventos táctiles (móviles)
  const handleTouchStart = () => {
    isTouchingRef.current = true;
    setIsPaused(true);
    if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    isTouchingRef.current = false;
    setIsPaused(false);
    const nearest = getNearestIndex();
    snapToIndex(((nearest % images.length) + images.length) % images.length);
    runAutoplayStep();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
    >
      {/* Fades laterales */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent" />
      </div>

      {/* Pista 3D */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
          }}
        >
          <div
            className="flex items-center"
            style={{ padding: `0 calc(50vw - ${cardDimensions.width / 2}px)` }}
          >
            {extendedImages.map((src, index) => (
              <CarouselCard
                key={`${index}-${src}`}
                src={src}
                index={index % images.length}
                scrollProgress={scrollProgress}
                totalImages={images.length}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
// octava version
