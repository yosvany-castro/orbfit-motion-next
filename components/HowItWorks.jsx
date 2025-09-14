// components/HowItWorks.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function HowItWorks({
  steps = [],
  ctaText = "Start With Free Audit →",
  ctaAction = () => {},
  images = [], // Array de imágenes, una por cada paso
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const scrollCountRef = useRef(0);
  const isScrollingRef = useRef(false);

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
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = (e) => {
      if (!isSticky) return;

      e.preventDefault();

      // Evitar múltiples cambios muy rápidos
      if (isScrollingRef.current) return;

      const deltaY = e.deltaY;

      if (Math.abs(deltaY) > 30) {
        // Umbral para evitar scrolls muy pequeños
        isScrollingRef.current = true;

        if (deltaY > 0 && activeStep < steps.length - 1) {
          // Scroll hacia abajo - siguiente paso
          setActiveStep((prev) => prev + 1);
        } else if (deltaY < 0 && activeStep > 0) {
          // Scroll hacia arriba - paso anterior
          setActiveStep((prev) => prev - 1);
        } else if (deltaY > 0 && activeStep === steps.length - 1) {
          // Último paso, liberar scroll
          setIsSticky(false);
          window.scrollBy(0, 100);
        }

        // Cooldown para evitar cambios muy rápidos
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Sección en vista, activar sticky
            if (!isSticky && activeStep === 0) {
              setIsSticky(true);
            }
          } else if (!entry.isIntersecting && isSticky) {
            // Sección fuera de vista, desactivar sticky si scrolleamos hacia arriba
            const rect = section.getBoundingClientRect();
            if (rect.top > window.innerHeight / 2) {
              setIsSticky(false);
              setActiveStep(0);
            }
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: "-20% 0px",
      }
    );

    observer.observe(section);

    // Listener para el wheel event
    if (isSticky) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isSticky, activeStep, steps.length]);

  return (
    <section
      ref={sectionRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 ${
        isSticky ? "md:sticky md:top-20" : ""
      }`}
      style={{ minHeight: "80vh" }}
    >
      {/* Columna Izquierda: Imagen con transición */}
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-[400px] h-[500px] rounded-2xl overflow-hidden transition-all duration-500">
          <Image
            key={currentImage} // Force remount for smooth transition
            src={currentImage}
            alt={`Step ${activeStep + 1} visualization`}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="400px"
          />
        </div>
      </div>

      {/* Columna Derecha: Pasos */}
      <div className="flex flex-col justify-center py-8 md:py-0">
        <div className="max-w-xl">
          {/* Lista de pasos */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || CalendarTodayIcon;
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <div
                  key={index}
                  className="relative flex gap-6 transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : isPast ? 0.5 : 0.3,
                    transform: isActive ? "scale(1)" : "scale(0.95)",
                  }}
                >
                  {/* Línea vertical gruesa */}
                  <div
                    className="w-1 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: isActive
                        ? "var(--orbit-blue)"
                        : "var(--foreground-muted)",
                      opacity: isActive ? 1 : 0.2,
                      minHeight: "80px",
                    }}
                  />

                  {/* Icono centrado verticalmente */}
                  <div
                    className="flex items-center"
                    style={{ marginTop: "-8px" }}
                  >
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        transition-all duration-500 flex-shrink-0
                        ${
                          isActive
                            ? "shadow-lg shadow-blue-500/20"
                            : "bg-gray-50"
                        }
                      `}
                      style={{
                        backgroundColor: isActive
                          ? "var(--orbit-blue)"
                          : isPast
                          ? "#e5e7eb"
                          : "#f9fafb",
                      }}
                    >
                      <Icon
                        sx={{
                          fontSize: 24,
                          color: isActive || isPast ? "white" : "#9ca3af",
                          transition: "all 0.5s",
                        }}
                      />
                    </div>
                  </div>

                  {/* Contenido - Título y Descripción */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3
                      className={`
                        text-xl font-semibold mb-2 transition-all duration-500
                      `}
                      style={{
                        color: isActive
                          ? "var(--foreground)"
                          : "var(--foreground-muted)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed transition-all duration-500"
                      style={{
                        color: "var(--foreground-muted)",
                        opacity: isActive ? 0.9 : 0.6,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              onClick={ctaAction}
              className="group inline-flex items-center gap-2 text-base font-medium transition-all duration-200 hover:gap-3"
              style={{
                color: "var(--orbit-blue)",
                opacity: activeStep === steps.length - 1 ? 1 : 0.5,
                pointerEvents:
                  activeStep === steps.length - 1 ? "auto" : "none",
              }}
            >
              {ctaText}
            </button>
          </div>

          {/* Indicador de progreso */}
          <div className="flex gap-2 mt-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  width: index === activeStep ? "32px" : "16px",
                  backgroundColor:
                    index <= activeStep ? "var(--orbit-blue)" : "#e5e7eb",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
