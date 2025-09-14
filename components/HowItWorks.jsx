// components/HowItWorks.jsx
"use client";

import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function HowItWorks({
  steps = [],
  ctaText = "Start With Free Audit →",
  ctaAction = () => {},
  imageUrl = "https://picsum.photos/seed/howitworks/600/800",
}) {
  // Mapa de iconos disponibles
  const iconMap = {
    calendar: CalendarTodayIcon,
    settings: SettingsIcon,
    rocket: RocketLaunchIcon,
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-8 md:gap-16">
      {/* Columna Izquierda: Imagen */}
      <div className="relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt="How our automation process works"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>

      {/* Columna Derecha: Pasos */}
      <div className="flex flex-col justify-center py-8 md:py-16">
        <div className="max-w-xl">
          {/* Lista de pasos */}
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || CalendarTodayIcon;
              const isActive = index === 0; // Primer paso activo por defecto

              return (
                <div
                  key={index}
                  className="relative flex gap-6 pb-12 last:pb-0"
                >
                  {/* Línea vertical */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-6 top-12 w-0.5 h-full -bottom-0"
                      style={{
                        backgroundColor: "var(--foreground-muted)",
                        opacity: 0.2,
                      }}
                    />
                  )}

                  {/* Icono */}
                  <div
                    className={`
                      relative z-10 w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-300 flex-shrink-0
                      ${
                        isActive ? "shadow-lg shadow-blue-500/20" : "bg-gray-50"
                      }
                    `}
                    style={{
                      backgroundColor: isActive
                        ? "var(--orbit-blue)"
                        : undefined,
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 24,
                        color: isActive ? "white" : "#9ca3af",
                      }}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pt-1">
                    <h3
                      className={`
                        text-xl font-semibold mb-2 transition-all duration-300
                        ${
                          isActive
                            ? "text-[var(--foreground)]"
                            : "text-[var(--foreground-muted)]"
                        }
                      `}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: isActive
                          ? "var(--foreground-muted)"
                          : "var(--foreground-muted)",
                        opacity: isActive ? 1 : 0.7,
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
          <div className="mt-10">
            <button
              onClick={ctaAction}
              className="group inline-flex items-center gap-2 text-base font-medium transition-all duration-200 hover:gap-3"
              style={{ color: "var(--orbit-blue)" }}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
