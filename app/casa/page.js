"use client";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[var(--foreground)]">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* --- Columna Izquierda: Contenido --- */}
        <div className="flex justify-center items-center py-16 md:py-0 px-8 sm:px-16">
          <div className="max-w-xl flex flex-col space-y-8 text-center md:text-left">
            {/* Headline Principal con subrayado SVG ajustado */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Your Business Running{" "}
              <span className="relative inline-block">
                Without You
                <svg
                  className="absolute -bottom-3 -left-2 w-full"
                  height="35"
                  viewBox="0 0 240 35" // Aumentado el ancho del viewBox
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 25 Q80 15, 160 20 T230 25" // Ajustada la curva
                    stroke="url(#gradient-headline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.9"
                  />
                  <path
                    d="M8 28 Q85 18, 165 23 T232 28" // Ajustada la curva
                    stroke="url(#gradient-headline-secondary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-headline"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#5B4FE9" />
                      <stop offset="50%" stopColor="#E94F8A" />
                      <stop offset="100%" stopColor="#F9A826" />
                    </linearGradient>
                    <linearGradient
                      id="gradient-headline-secondary"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#5B4FE9" stopOpacity="0.5" />
                      <stop
                        offset="50%"
                        stopColor="#E94F8A"
                        stopOpacity="0.5"
                      />
                      <stop
                        offset="100%"
                        stopColor="#F9A826"
                        stopOpacity="0.5"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subheadline con nuevo color */}
            <p
              className="text-xl lg:text-2xl"
              style={{ color: "var(--foreground-muted)" }}
            >
              We handle the boring stuff. You handle the growth.
            </p>

            {/* Lista de Beneficios con nuevo color */}
            <div className="space-y-4 text-lg text-left">
              {[
                {
                  bold: "Every follow-up sent.",
                  normal: "All happening while you sleep.",
                },
                {
                  bold: "Every invoice collected.",
                  normal: "Focus on what you love.",
                },
                {
                  bold: "Every lead nurtured.",
                  normal: "No tools to learn, no systems to manage.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AutoAwesomeIcon
                    style={{
                      color: "var(--orbit-blue)",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: "var(--foreground-muted)" }}>
                    <strong>{item.bold}</strong> {item.normal}
                  </span>
                </div>
              ))}
            </div>

            {/* Texto final con resaltado */}
            <p
              className="text-lg font-medium pt-2"
              style={{ color: "var(--foreground-muted)" }}
            >
              We set it up, we run it,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--foreground)]">
                  you grow.
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F9A826]/40 -skew-x-12 z-0"></span>
              </span>
            </p>

            {/* CTA */}
            <div className="pt-4 flex justify-center md:justify-start">
              <button
                className="w-full sm:w-auto px-10 py-4 rounded-full font-medium text-base text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                style={{ backgroundColor: "var(--orbit-blue)" }}
              >
                Automate My Business
              </button>
            </div>
          </div>
        </div>

        {/* --- Columna Derecha: Imagen --- */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/home_01.jpg"
            alt="A smiling professional indicating success with business automation"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>
      </section>
    </div>
  );
}
