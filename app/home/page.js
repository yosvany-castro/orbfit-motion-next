"use client";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Image from "next/image";

export default function Home() {
  // Marcas duplicadas para el efecto infinito
  const brands = [
    "Google",
    "airbnb",
    "stripe",
    "Uber",
    "Mosaic",
    "Intercom",
    "Mode",
    "Canopy",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-16 py-24">
        <div className="grid grid-cols-2 gap-20 items-center min-h-[650px]">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Years Experience */}
            <div className="flex items-start gap-5">
              <span
                className="text-8xl font-bold leading-none"
                style={{
                  color: "#0A0A0A",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                12
              </span>
              <div className="flex flex-col pt-3 space-y-1">
                <span
                  className="text-lg"
                  style={{
                    color: "#606060",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Years
                </span>
                <span
                  className="text-lg"
                  style={{
                    color: "#606060",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Experienced
                </span>
                <span
                  className="text-lg"
                  style={{
                    color: "#606060",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Automation
                </span>
              </div>
            </div>

            {/* Main Title with Decorative Underline */}
            <div className="space-y-4">
              <h1
                className="text-6xl font-bold leading-[1.1]"
                style={{
                  color: "#0A0A0A",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Best Experience
                <br />
                Management
                <br />
                <span className="relative inline-block">
                  Automation.
                  {/* SVG Decorative Underline - Más curveado */}
                  <svg
                    className="absolute -bottom-3 -left-2"
                    width="320"
                    height="35"
                    viewBox="0 0 320 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 25 Q80 15, 160 20 T310 25"
                      stroke="url(#gradient1)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.9"
                    />
                    <path
                      d="M8 28 Q85 18, 165 23 T312 28"
                      stroke="url(#gradient2)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.5"
                    />
                    <defs>
                      <linearGradient
                        id="gradient1"
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
                        id="gradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#5B4FE9"
                          stopOpacity="0.5"
                        />
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
            </div>

            {/* Description Text */}
            <p
              className="text-lg leading-relaxed max-w-[480px]"
              style={{
                color: "#606060",
                fontFamily: "Work Sans, sans-serif",
              }}
            >
              Automation is especially beneficial in hazardous environments
              where human presence might pose risks.
            </p>

            {/* CTA Buttons - Espacio reducido */}
            <div className="flex items-center gap-6 pt-2">
              <button
                className="px-12 py-4 rounded-full font-medium text-base text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  backgroundColor: "#5B4FE9",
                  fontFamily: "Work Sans, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#4A3FD8";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#5B4FE9";
                }}
                onMouseDown={(e) => {
                  e.target.style.backgroundColor = "#3A2FC7";
                }}
              >
                Get Started
              </button>

              <button className="flex items-center gap-3 group">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-[#5B4FE9]"
                  style={{
                    border: "2px solid #5B4FE9",
                  }}
                >
                  <PlayArrowIcon
                    className="transition-colors duration-200 group-hover:text-white"
                    sx={{
                      fontSize: 20,
                      color: "#5B4FE9",
                    }}
                  />
                </div>
                <span
                  className="font-medium text-base transition-colors duration-200 group-hover:text-[#5B4FE9]"
                  style={{
                    color: "#0A0A0A",
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  How It Works
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[500px]">
              <Image
                src="/1.png"
                alt="Orbfit Motion Automation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Company Logos with Infinite Scroll */}
        <div className="mt-16">
          <p
            className="mb-12 text-center text-lg"
            style={{
              color: "#606060",
              fontFamily: "Work Sans, sans-serif",
            }}
          >
            Over{" "}
            <span className="font-semibold" style={{ color: "#0A0A0A" }}>
              32k+
            </span>{" "}
            software businesses growing with D-agency.
          </p>

          {/* Animated Logos Container */}
          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-20 px-10">
                {brands.map((brand, index) => (
                  <span
                    key={`${brand}-1-${index}`}
                    className="text-3xl font-medium whitespace-nowrap transition-colors duration-200 hover:text-[#5B4FE9]"
                    style={{
                      color: "#B0B0B0",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-20 px-10">
                {brands.map((brand, index) => (
                  <span
                    key={`${brand}-2-${index}`}
                    className="text-3xl font-medium whitespace-nowrap transition-colors duration-200 hover:text-[#5B4FE9]"
                    style={{
                      color: "#B0B0B0",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
