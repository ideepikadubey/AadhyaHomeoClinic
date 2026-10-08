import { useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import imageGal1 from "@/assets/image gal1.jpeg";
import imageGal2 from "@/assets/image gal2.jpeg";
import imageGal3 from "@/assets/image gal3.jpeg";

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "clinic-consultation-1",
    title: "Clinical Consultation Chamber",
    image: imageGal1,
    caption: "Dr. Mayur N. Mishra at Aadhya Homoeo Clinic",
  },
  {
    id: "patient-consultation-2",
    title: "Patient Care & Case Analysis",
    image: imageGal2,
    caption: "Personalized constitutional evaluation and patient consultation",
  },
  {
    id: "clinic-facility-3",
    title: "Clinic Ambience & Facility",
    image: imageGal3,
    caption: "Hygienic, welcoming, and serene healing environment",
  },
];

export function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev !== null ? (prev + 1) % galleryData.length : null
    );
  }, [activeImageIndex]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + galleryData.length) % galleryData.length : null
    );
  }, [activeImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-muted/40 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Clinic Gallery
          </div>

          <h2
            className="text-foreground mb-3 sm:mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
              fontWeight: 700,
            }}
          >
            Clinic Moments & <span className="text-primary italic font-normal">Glimpses</span>
          </h2>

          <p
            className="text-muted-foreground max-w-xl mx-auto text-xs sm:text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A glimpse into Aadhya Homoeo Clinic's consultation environment and dedicated patient care.
          </p>
        </div>

        {/* Clean 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-secondary/30">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="w-full flex items-center justify-between text-white">
                    <span className="text-xs font-medium drop-shadow-md">{item.caption}</span>
                    <div className="w-8 h-8 rounded-full bg-white text-[#0a1714] flex items-center justify-center shadow-lg flex-shrink-0 ml-2">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Card Footer */}
              <div className="p-4 bg-card">
                <h3
                  className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-muted-foreground text-xs mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && galleryData[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-[#0a1714] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black/60 flex items-center justify-center overflow-hidden">
              <img
                src={galleryData[activeImageIndex].image}
                alt={galleryData[activeImageIndex].title}
                className="w-full h-full object-contain select-none"
              />
            </div>

            {/* Lightbox Minimal Caption */}
            <div className="p-4 sm:p-5 bg-[#0f241e] border-t border-white/10 text-white flex items-center justify-between gap-4">
              <div>
                <h3
                  className="text-base sm:text-lg font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {galleryData[activeImageIndex].title}
                </h3>
                <p
                  className="text-xs text-white/75 mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {galleryData[activeImageIndex].caption}
                </p>
              </div>

              {/* Counter Pill */}
              <div className="flex-shrink-0">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/15">
                  {activeImageIndex + 1} / {galleryData.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
