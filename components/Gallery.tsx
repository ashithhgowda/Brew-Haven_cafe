"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { galleryImages, type GalleryImage } from "@/data/galleryData";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="bg-[#0e0b07] px-6 py-24 md:px-10">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header — matches menu/about style */}
        <header className="mb-14 text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/60" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber-500/60">Gallery</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/60" />
          </div>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-amber-50 sm:text-5xl">
            Moments from Brew Haven
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-amber-100/50 sm:text-base">
            A glimpse of our daily rituals — rich coffee, warm corners, and
            flavors crafted with care.
          </p>
        </header>

        {/* Masonry-style grid — col 1 tall, col 2 short, col 3 tall etc */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={[
                "group relative overflow-hidden rounded-2xl border border-amber-900/25 shadow-xl shadow-black/40",
                "transition-all duration-500 hover:-translate-y-1 hover:border-amber-700/50 hover:shadow-black/60",
                // alternate tall/short for visual rhythm
                index % 3 === 1 ? "lg:mt-8" : "",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              ].join(" ")}
              style={{ transitionDelay: `${index * 70}ms` }}
              aria-label={`Open image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={860}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Bottom scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0b07]/70 via-transparent to-transparent" />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="rounded-full border border-amber-400/30 bg-black/50 p-3 backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${selectedImage.alt}`}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full border border-amber-900/40 bg-[#13100a] p-2.5 text-amber-400 transition-all hover:border-amber-700/60 hover:bg-[#1c1510] hover:text-amber-300"
            aria-label="Close image preview"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>

          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1600}
            height={1066}
            className="max-h-[88vh] w-full max-w-5xl rounded-2xl border border-amber-900/30 object-cover shadow-2xl shadow-black/60"
            sizes="100vw"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}