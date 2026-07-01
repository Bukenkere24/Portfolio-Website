import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useToast } from "@/context/ToastContext";

export function Toast() {
  const { message } = useToast();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[150] max-w-md -translate-x-1/2 rounded-card border border-white/10 bg-surface/95 px-5 py-4 text-sm text-text-secondary shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
