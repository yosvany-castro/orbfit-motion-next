// components/HowItWorks.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function HowItWorks({
  steps = [],
  ctaText = "Start With Free Audit →",
  ctaAction = () => {},
  images = [],
}) {
  const [currentProgress, setCurrentProgress] = useState(0); // Progreso total: 0 a steps.length
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Derivar el paso activo del progreso
  const activeStep = Math.min(Math.floor(currentProgress), steps.length - 1);
  const stepProgress = currentProgress - activeStep; // Progreso dentro del paso actual (0 a 1)

  // Mapa de iconos disponibles
  const iconMap = {
    calendar: CalendarTodayIcon,
    settings: SettingsIcon,
    rocket: RocketLaunchIcon,
  };

  // Imagen actual basada en el paso activo
  const currentImage =
    images[activeStep] ||
    images[0] ||
    "https://picsum.photos/seed/step1/600/800";

  useEffect(() => {
    let ticking = false;

    const handleWheel = (e) => {
      if (!isSticky) return;

      e.preventDefault();
      e.stopPropagation();

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Normalizar el deltaY - típicamente entre -100 y 100 por scroll
          const scrollSpeed = 0.005; // Ajusta la sensibilidad
          const delta = e.deltaY * scrollSpeed;

          setCurrentProgress((prev) => {
            let newProgress = prev + delta;

            // Limitar el progreso entre -0.5 y steps.length + 0.5
            // Esto permite salir del sticky en ambas direcciones
            newProgress = Math.max(
              -0.5,
              Math.min(steps.length + 0.5, newProgress)
            );

            // Si llegamos a los límites, salir del sticky
            if (newProgress <= -0.3) {
              // Salir hacia arriba
              setTimeout(() => {
                setIsSticky(false);
                window.scrollBy(0, -50);
              }, 0);
              return 0;
            } else if (newProgress >= steps.length + 0.3) {
              // Salir hacia abajo
              setTimeout(() => {
                setIsSticky(false);
                window.scrollBy(0, 50);
              }, 0);
              return steps.length;
            }

            // Clamp el progreso para la visualización
            return Math.max(0, Math.min(steps.length, newProgress));
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;

        // Activar cuando el centro de la sección está cerca del centro del viewport
        const isInPosition = Math.abs(sectionCenter - viewportCenter) < 100;

        if (isInPosition && entry.isIntersecting && !isSticky) {
          setIsSticky(true);
        } else if (!entry.isIntersecting && isSticky) {
          // Desactivar si la sección sale completamente del viewport
          setIsSticky(false);
          // Reset progress solo si salimos por arriba
          if (rect.bottom < 0) {
            setCurrentProgress(0);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: [0, 0.1, 0.5, 0.9, 1],
      rootMargin: "0px",
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Solo agregar el listener si estamos en sticky
    if (isSticky) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      // Prevenir scroll del body cuando estamos en sticky
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "";
    };
  }, [isSticky, steps.length]);

  return (
    <div ref={containerRef} className="relative">
      <section
        ref={sectionRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 ${
          isSticky ? "md:sticky md:top-20" : ""
        }`}
        style={{ minHeight: "80vh" }}
      >
        {/* Columna Izquierda: Imagen con transición suave */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[400px] h-[500px] rounded-2xl overflow-hidden bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={currentImage}
                  alt={`Step ${activeStep + 1} visualization`}
                  fill
                  className="object-cover"
                  sizes="400px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Columna Derecha: Pasos */}
        <div className="flex flex-col justify-center py-8 md:py-0">
          <div className="max-w-xl">
            {/* Lista de pasos */}
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = iconMap[step.icon] || CalendarTodayIcon;
                const isCurrentStep = index === activeStep;
                const isPastStep =
                  index < activeStep ||
                  (index === activeStep && stepProgress > 0.5);
                const isActiveOrPast = currentProgress >= index;

                // Calcular el progreso de la línea para este paso
                let lineProgress = 0;
                if (index < activeStep) {
                  lineProgress = 1; // Pasos completados
                } else if (index === activeStep) {
                  lineProgress = Math.min(1, stepProgress * 1.2); // Paso actual con un poco de aceleración
                } else {
                  lineProgress = 0; // Pasos futuros
                }

                return (
                  <motion.div
                    key={index}
                    className="relative flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isActiveOrPast ? 1 : 0.3,
                      x: 0,
                      scale: isCurrentStep ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Contenedor de la línea vertical */}
                    <div
                      className="relative w-1 flex-shrink-0"
                      style={{ minHeight: "80px" }}
                    >
                      {/* Línea de fondo (gris) */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: "var(--foreground-muted)",
                          opacity: 0.15,
                        }}
                      />
                      {/* Línea de progreso (azul) */}
                      <motion.div
                        className="absolute left-0 top-0 w-full rounded-full overflow-hidden"
                        style={{
                          backgroundColor: "var(--orbit-blue)",
                          transformOrigin: "top",
                        }}
                        animate={{
                          height: `${lineProgress * 100}%`,
                        }}
                        transition={{
                          duration: 0.15,
                          ease: "linear",
                        }}
                      />
                    </div>

                    {/* Icono centrado verticalmente */}
                    <div
                      className="flex items-center"
                      style={{ marginTop: "-8px" }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: isActiveOrPast
                            ? "var(--orbit-blue)"
                            : "#f3f4f6",
                        }}
                        animate={{
                          scale:
                            isCurrentStep &&
                            stepProgress > 0.2 &&
                            stepProgress < 0.8
                              ? 1.1
                              : 1,
                          boxShadow: isCurrentStep
                            ? "0 10px 25px -5px rgba(91, 79, 233, 0.3)"
                            : "0 0 0 0 rgba(91, 79, 233, 0)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon
                          sx={{
                            fontSize: 24,
                            color: isActiveOrPast ? "white" : "#9ca3af",
                            transition: "all 0.3s",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Contenido - Título y Descripción */}
                    <div className="flex-1 flex flex-col justify-center">
                      <motion.h3
                        className="text-xl font-semibold mb-2"
                        style={{
                          color: isActiveOrPast
                            ? "var(--foreground)"
                            : "var(--foreground-muted)",
                        }}
                        animate={{
                          color: isActiveOrPast
                            ? "var(--foreground)"
                            : "var(--foreground-muted)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p
                        className="text-base leading-relaxed"
                        style={{
                          color: "var(--foreground-muted)",
                        }}
                        animate={{
                          opacity: isActiveOrPast ? 0.9 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-12"
              animate={{
                opacity: currentProgress >= steps.length - 0.2 ? 1 : 0.4,
                y: currentProgress >= steps.length - 0.2 ? 0 : 10,
              }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={ctaAction}
                className="group inline-flex items-center gap-2 text-base font-medium transition-all duration-200 hover:gap-3"
                style={{
                  color: "var(--orbit-blue)",
                  pointerEvents:
                    currentProgress >= steps.length - 0.2 ? "auto" : "none",
                }}
              >
                {ctaText}
              </button>
            </motion.div>

            {/* Indicador de progreso general */}
            <div className="flex gap-2 mt-8">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className="h-1 rounded-full"
                  style={{
                    backgroundColor:
                      currentProgress > index ? "var(--orbit-blue)" : "#e5e7eb",
                  }}
                  animate={{
                    width: index === activeStep ? "32px" : "16px",
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Debug info - eliminar en producción */}
            {process.env.NODE_ENV === "development" && (
              <div className="mt-4 text-xs text-gray-400">
                Progress: {currentProgress.toFixed(2)} | Step: {activeStep} |
                Sticky: {isSticky ? "Yes" : "No"}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
