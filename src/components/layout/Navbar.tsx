import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Moon, Sun } from "lucide-react";
import { Container } from "./Container";
import { heroSequence, motionEase } from "@/constants/motion";
import { usePageMotion } from "@/context/PageMotionContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useTheme } from "@/hooks/useTheme";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { socials } from "@/data";
import { cn } from "@/utils/cn";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

const sectionIds = navItems.map((item) => item.id);

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
} as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme("dark");
  const { isReady } = usePageMotion();
  const reduceMotion = useReducedMotion();
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-cyan"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isScrolled ? "pt-3" : "pt-5",
        )}
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={
          isReady || reduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -16 }
        }
        transition={{
          duration: reduceMotion ? 0 : 0.55,
          delay: reduceMotion ? 0 : heroSequence.navbar,
          ease: motionEase,
        }}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between rounded-full border px-4 shadow-[0_16px_60px_rgba(0,0,0,0.22)] transition-all duration-300",
              isScrolled
                ? "h-14 border-white/10 bg-background/80 backdrop-blur-xl"
                : "h-16 border-transparent bg-transparent backdrop-blur-none",
            )}
          >
            <a
              href="#home"
              className="font-heading text-sm font-semibold tracking-[0.2em] text-text-primary transition-colors hover:text-cyan"
              aria-label="Avaneesh G B home"
              data-cursor-hover
            >
              AGB
            </a>

            <nav aria-label="Primary navigation" className="hidden lg:block">
              <ul className="flex items-center gap-1 text-sm text-text-secondary">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        "group relative rounded-full px-3 py-2 transition-colors hover:text-text-primary",
                        activeSection === item.id && "text-text-primary",
                      )}
                      data-cursor-hover
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute inset-x-3 bottom-1 h-px origin-left bg-cyan transition-transform duration-300",
                          activeSection === item.id
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-1">
              {socials.map((social) => {
                if (
                  social.icon !== "github" &&
                  social.icon !== "linkedin" &&
                  social.icon !== "resume"
                ) {
                  return null;
                }

                const Icon = socialIcons[social.icon];

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    className="grid size-9 place-items-center rounded-full text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    data-cursor-hover
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                );
              })}
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                aria-label="Toggle theme"
                data-cursor-hover
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <Moon className="size-4" aria-hidden />
                ) : (
                  <Sun className="size-4" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </Container>
      </motion.header>
    </>
  );
}
