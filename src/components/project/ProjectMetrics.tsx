import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Card } from "@/components/common/Card";
import type { ProjectResults } from "@/types";

interface ProjectMetricsProps {
  results: ProjectResults;
}

export function ProjectMetrics({ results }: ProjectMetricsProps) {
  return (
    <div>
      <p className="max-w-3xl text-text-secondary">{results.summary}</p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {results.metrics.map((metric) => (
          <Card key={metric.label} className="p-5">
            <dt className="text-sm text-text-secondary">{metric.label}</dt>
            <dd className="mt-3 font-heading text-3xl font-semibold">
              <AnimatedCounter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  );
}
