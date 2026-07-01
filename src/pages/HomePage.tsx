import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { JourneyTimeline } from "@/components/timeline/JourneyTimeline";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <JourneyTimeline />
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
