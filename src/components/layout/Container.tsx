import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
  id?: string;
  narrow?: boolean;
}

export function Container({
  children,
  className,
  as: Component = "div",
  id,
  narrow = false,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full max-w-[90rem] px-6 md:px-8",
        narrow && "max-w-4xl",
        className,
      )}
    >
      {children}
    </Component>
  );
}
