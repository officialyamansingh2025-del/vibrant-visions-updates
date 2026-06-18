import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [handleKey]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-scale-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 hover:scale-110"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 hover:scale-110"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 hover:scale-110"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <div
        className="relative max-h-[88vh] max-w-[92vw] sm:max-w-[80vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-2xl"
        />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1 text-sm text-white/80">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
