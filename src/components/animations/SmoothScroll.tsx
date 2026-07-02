import { type ReactNode } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SmoothScrollProps {
  children: ReactNode;
  enabled?: boolean;
}

export function SmoothScroll({ children, enabled = true }: SmoothScrollProps) {
  const reduceMotion = useReducedMotion();
  useLenis({ enabled: enabled && !reduceMotion });
  return <>{children}</>;
}
