import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { CurrentBuildSection } from "@/components/sections/CurrentBuildSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TechnologyPreviewSection } from "@/components/sections/TechnologyPreviewSection";
import { SeoHead } from "@/components/seo/SeoHead";
import { JourneyTimeline } from "@/components/timeline/JourneyTimeline";
import { buildPersonJsonLd, buildWebsiteJsonLd } from "@/utils/seo";

export function HomePage() {
  return (
    <>
      <SeoHead jsonLd={[buildWebsiteJsonLd(), buildPersonJsonLd()]} />
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <JourneyTimeline />
      <CoreValuesSection />
      <CurrentBuildSection />
      <TechnologyPreviewSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <GitHubSection />
      <ContactSection />
    </>
  );
}
