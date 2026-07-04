import { Card } from "@/components/common/Card";
import type { ProjectDemoVideo as ProjectDemoVideoType } from "@/types";

interface ProjectDemoVideoProps {
  video: ProjectDemoVideoType;
}

export function ProjectDemoVideo({ video }: ProjectDemoVideoProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/10] bg-black">
        <video
          className="size-full object-contain"
          src={video.src}
          controls
          playsInline
          muted
          loop
          preload="metadata"
          aria-label={video.alt}
        />
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-sm text-text-secondary">
        {video.caption}
      </p>
    </Card>
  );
}
