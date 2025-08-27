"use client";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              color: "#0A0A0A",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Condiciones de Servicio
          </h1>
          <p
            className="text-lg"
            style={{
              color: "#606060",
              fontFamily: "Work Sans, sans-serif",
            }}
          >
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              1. Aceptación de los Términos
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Al acceder y utilizar los servicios de Orbfit Motion, aceptas
              estar sujeto a estos términos de servicio. Si no estás de acuerdo
              con alguna parte de estos términos, no debes usar nuestros
              servicios.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              2. Descripción del Servicio
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Orbfit Motion proporciona servicios de automatización y gestión de
              procesos empresariales. Nuestros servicios están diseñados para
              optimizar flujos de trabajo y mejorar la eficiencia operativa de
              tu negocio.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              3. Uso Aceptable
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Te comprometes a utilizar nuestros servicios únicamente para fines
              legales y de acuerdo con estos términos. No debes usar los
              servicios para actividades que violen leyes aplicables o que
              puedan dañar a terceros.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              4. Responsabilidades del Usuario
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Eres responsable de mantener la confidencialidad de tu cuenta,
              proporcionar información precisa y cumplir con todas las leyes
              aplicables en el uso de nuestros servicios de automatización.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              5. Limitación de Responsabilidad
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Orbfit Motion proporciona sus servicios &quot;tal como
              están&quot;. No garantizamos que los servicios sean
              ininterrumpidos o libres de errores. Nuestra responsabilidad se
              limita al máximo permitido por la ley aplicable.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              6. Modificaciones del Servicio
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Nos reservamos el derecho de modificar, suspender o discontinuar
              cualquier parte de nuestros servicios en cualquier momento, con o
              sin previo aviso.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              7. Terminación
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Podemos terminar o suspender tu acceso a los servicios
              inmediatamente, sin previo aviso, por cualquier razón, incluyendo
              el incumplimiento de estos términos.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              8. Ley Aplicable
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Estos términos se rigen por las leyes del país donde opera Orbfit
              Motion. Cualquier disputa será resuelta en los tribunales
              competentes de dicha jurisdicción.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              9. Contacto
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Para preguntas sobre estos términos de servicio, contacta con
              nosotros en:
            </p>
            <p
              style={{
                color: "#5B4FE9",
                fontFamily: "Work Sans, sans-serif",
                fontWeight: "500",
              }}
            >
              legal@orbfitmotion.com
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
