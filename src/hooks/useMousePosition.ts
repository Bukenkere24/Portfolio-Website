import { useEffect, useState } from "react";

export function useMousePosition(enabled = true) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    function onMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  return position;
}
