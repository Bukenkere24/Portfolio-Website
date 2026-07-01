import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePageMotion } from "@/context/PageMotionContext";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const { setReady } = usePageMotion();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
      setReady();
      onComplete?.();
    }, 1400);

    return () => window.clearTimeout(timeoutId);
  }, [onComplete, setReady]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
          aria-label="Loading portfolio"
          role="status"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] font-heading text-lg font-semibold tracking-tight text-text-primary shadow-[0_0_60px_rgba(37,99,235,0.25)]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.04, 1],
                      borderColor: [
                        "rgba(255,255,255,0.1)",
                        "rgba(6,182,212,0.4)",
                        "rgba(255,255,255,0.1)",
                      ],
                    }
              }
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              AGB
            </motion.div>
            <p className="font-mono text-sm text-text-secondary">
              Building intelligent systems...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
