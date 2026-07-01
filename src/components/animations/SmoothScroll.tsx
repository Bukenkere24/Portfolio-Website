import { type ReactNode } from "react";
import { useLenis } from "@/hooks/useLenis";

interface SmoothScrollProps {
  children: ReactNode;
  enabled?: boolean;
}

export function SmoothScroll({ children, enabled = true }: SmoothScrollProps) {
  useLenis({ enabled });
  return <>{children}</>;
}
