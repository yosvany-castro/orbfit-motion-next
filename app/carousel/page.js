// app/home/page.js
"use client";

import InteractiveCarousel from "@/components/InteractiveCarousel";

export default function Home() {
  // Lista de imágenes que le pasaremos al carrusel
  const carouselImages = [
    "https://picsum.photos/seed/picsum1/600/800",
    "https://picsum.photos/seed/picsum2/600/800",
    "https://picsum.photos/seed/picsum3/600/800",
    "https://picsum.photos/seed/picsum4/600/800",
    "https://picsum.photos/seed/picsum5/600/800",
    "https://picsum.photos/seed/picsum6/600/800",
    "https://picsum.photos/seed/picsum7/600/800",
  ];

  return (
    <main>
      <InteractiveCarousel images={carouselImages} />
    </main>
  );
}
//Primera version
