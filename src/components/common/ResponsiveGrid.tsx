import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  columns?: "2" | "3";
}

export function ResponsiveGrid({
  children,
  className,
  columns = "3",
}: ResponsiveGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5",
        columns === "2" ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
