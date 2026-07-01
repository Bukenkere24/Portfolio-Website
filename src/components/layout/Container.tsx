import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
  id?: string;
}

export function Container({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)}
    >
      {children}
    </Component>
  );
}
