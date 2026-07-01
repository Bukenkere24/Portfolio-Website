import { type ReactNode } from "react";
import { Card } from "@/components/common/Card";
import { cn } from "@/utils/cn";

interface StatCardProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <Card padding="sm" className={cn("backdrop-blur-sm", className)}>
      <dt className="text-sm text-text-secondary">{label}</dt>
      <dd className="mt-2 font-heading text-2xl font-semibold">{value}</dd>
    </Card>
  );
}
