import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectArchitecture } from "@/types";
import { cn } from "@/utils/cn";

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
  accent?: "accent" | "cyan" | "purple" | "success";
}

const accentMap = {
  accent: {
    node: "border-accent/30 bg-accent/10 text-accent",
    active: "border-accent/60 bg-accent/20 shadow-[0_0_30px_rgba(37,99,235,0.25)]",
    line: "#2563EB",
  },
  cyan: {
    node: "border-cyan/30 bg-cyan/10 text-cyan",
    active: "border-cyan/60 bg-cyan/20 shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    line: "#06B6D4",
  },
  purple: {
    node: "border-purple/30 bg-purple/10 text-purple",
    active: "border-purple/60 bg-purple/20 shadow-[0_0_30px_rgba(124,58,237,0.25)]",
    line: "#7C3AED",
  },
  success: {
    node: "border-success/30 bg-success/10 text-success",
    active: "border-success/60 bg-success/20 shadow-[0_0_30px_rgba(34,197,94,0.25)]",
    line: "#22C55E",
  },
};

export function ArchitectureDiagram({
  architecture,
  accent = "accent",
}: ArchitectureDiagramProps) {
  const reduceMotion = useReducedMotion();
  const { nodes, edges } = architecture;
  const styles = accentMap[accent];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || nodes.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % nodes.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [nodes.length, reduceMotion]);

  return (
    <div>
      <p className="max-w-3xl text-text-secondary">{architecture.description}</p>
      <div className="mt-8 overflow-x-auto rounded-card border border-white/10 bg-background/40 p-6">
        <div className="min-w-[720px]">
          <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                className={cn(
                  "relative z-10 rounded-2xl border p-4 text-center transition-shadow duration-300",
                  activeIndex === index ? styles.active : styles.node,
                )}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <p className="font-medium">{node.label}</p>
                {node.description && (
                  <p className="mt-2 text-xs text-text-secondary">{node.description}</p>
                )}
              </motion.div>
            ))}
          </div>

          <svg
            aria-hidden
            className="mt-6 h-12 w-full"
            viewBox={`0 0 ${Math.max(nodes.length - 1, 1) * 120} 40`}
            preserveAspectRatio="none"
          >
            {edges.map((edge, index) => {
              const fromIndex = nodes.findIndex((node) => node.id === edge.from);
              const toIndex = nodes.findIndex((node) => node.id === edge.to);
              if (fromIndex < 0 || toIndex < 0) return null;

              const x1 = fromIndex * 120 + 40;
              const x2 = toIndex * 120 + 40;
              const isActive = activeIndex === fromIndex || activeIndex === toIndex;

              return (
                <motion.line
                  key={`${edge.from}-${edge.to}`}
                  x1={x1}
                  y1="20"
                  x2={x2}
                  y2="20"
                  stroke={styles.line}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  strokeOpacity={isActive ? 0.9 : 0.35}
                  initial={reduceMotion ? undefined : { pathLength: 0 }}
                  whileInView={reduceMotion ? undefined : { pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 + index * 0.08 }}
                />
              );
            })}
          </svg>

          <div className="space-y-2 font-mono text-xs text-text-secondary">
            {edges.map((edge, index) => (
              <motion.p
                key={`${edge.from}-${edge.to}-label`}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.05 }}
              >
                {edge.from} {"->"} {edge.to}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
