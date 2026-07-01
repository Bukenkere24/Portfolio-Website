import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/common/Card";
import { SafeImage } from "@/components/common/SafeImage";
import type { ProjectScreenshot } from "@/types";

interface ProjectGalleryProps {
  items: ProjectScreenshot[];
  title?: string;
}

export function ProjectGallery({ items, title = "Gallery" }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => {
    setActiveIndex(null);
    setZoom(1);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + items.length) % items.length,
    );
    setZoom(1);
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % items.length,
    );
    setZoom(1);
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "+" || event.key === "=") {
        setZoom((current) => Math.min(current + 0.25, 2.5));
      }
      if (event.key === "-") {
        setZoom((current) => Math.max(current - 0.25, 1));
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showNext, showPrevious]);

  if (items.length === 0) return null;

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05}>
            <button
              type="button"
              className="group w-full text-left"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${item.alt} in fullscreen viewer`}
              data-cursor-hover
            >
              <Card hover className="overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <SafeImage
                    src={item.src}
                    alt={item.alt}
                    placeholder={item.placeholder}
                    className="transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 p-4">
                  <p className="text-sm text-text-secondary">{item.caption}</p>
                  <Maximize2 className="size-4 shrink-0 text-text-secondary" aria-hidden />
                </div>
              </Card>
            </button>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} fullscreen viewer`}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              if (Math.abs(delta) > 50) {
                if (delta > 0) showPrevious();
                else showNext();
              }
              touchStartX.current = null;
            }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-text-primary"
              onClick={close}
              aria-label="Close gallery"
              data-cursor-hover
            >
              <X className="size-5" />
            </button>

            <button
              type="button"
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 md:grid"
              onClick={showPrevious}
              aria-label="Previous image"
              data-cursor-hover
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 md:grid"
              onClick={showNext}
              aria-label="Next image"
              data-cursor-hover
            >
              <ChevronRight className="size-5" />
            </button>

            <div className="flex w-full max-w-6xl flex-col gap-4">
              <div className="overflow-hidden rounded-project border border-white/10 bg-surface">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={items[activeIndex].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: zoom }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    className="aspect-[16/10] origin-center"
                  >
                    <SafeImage
                      src={items[activeIndex].src}
                      alt={items[activeIndex].alt}
                      placeholder={items[activeIndex].placeholder}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-3xl text-sm text-text-secondary md:text-base">
                  {items[activeIndex].caption}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5"
                    onClick={() => setZoom((current) => Math.max(current - 0.25, 1))}
                    aria-label="Zoom out"
                    data-cursor-hover
                  >
                    <ZoomOut className="size-4" />
                  </button>
                  <button
                    type="button"
                    className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5"
                    onClick={() => setZoom((current) => Math.min(current + 0.25, 2.5))}
                    aria-label="Zoom in"
                    data-cursor-hover
                  >
                    <ZoomIn className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
