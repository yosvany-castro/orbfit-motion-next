"use client";
import Link from "next/link";

export default function Privacy() {
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
            Política de Privacidad
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
              1. Información que Recopilamos
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              En Orbfit Motion, recopilamos información que nos proporcionas
              directamente cuando te registras para nuestros servicios de
              automatización, así como información técnica sobre el uso de
              nuestra plataforma.
            </p>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Esto incluye: información de contacto, datos de configuración de
              automatización, métricas de rendimiento y logs de actividad
              necesarios para el funcionamiento del servicio.
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
              2. Cómo Usamos tu Información
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Utilizamos la información recopilada para proporcionar, mantener y
              mejorar nuestros servicios de automatización, procesar
              transacciones, comunicarnos contigo y garantizar la seguridad de
              la plataforma.
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
              3. Compartir Información
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              No vendemos tu información personal. Podemos compartir información
              con proveedores de servicios que nos ayudan a operar nuestra
              plataforma, siempre bajo estrictos acuerdos de confidencialidad.
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
              4. Seguridad de Datos
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Implementamos medidas de seguridad técnicas y organizacionales
              apropiadas para proteger tu información contra acceso no
              autorizado, alteración, divulgación o destrucción.
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
              5. Tus Derechos
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Tienes derecho a acceder, actualizar, corregir o eliminar tu
              información personal. También puedes solicitar la portabilidad de
              tus datos o retirar tu consentimiento para ciertos procesamientos.
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
              6. Cookies y Tecnologías Similares
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Utilizamos cookies y tecnologías similares para mejorar tu
              experiencia, analizar el uso de nuestro sitio y personalizar
              contenido. Puedes gestionar tus preferencias de cookies en la
              configuración de tu navegador.
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
              7. Contacto
            </h2>
            <p
              className="mb-4"
              style={{
                color: "#404040",
                fontFamily: "Work Sans, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Si tienes preguntas sobre esta política de privacidad o nuestras
              prácticas de manejo de datos, puedes contactarnos en:
            </p>
            <p
              style={{
                color: "#5B4FE9",
                fontFamily: "Work Sans, sans-serif",
                fontWeight: "500",
              }}
            >
              privacy@orbfitmotion.com
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
