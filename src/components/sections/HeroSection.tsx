import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { StatCard } from "@/components/common/StatCard";
import { SafeImage } from "@/components/common/SafeImage";
import { HeroReveal } from "@/components/animations/HeroReveal";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { heroContent, heroRoles, heroStats } from "@/data";
import { isValidImageSrc } from "@/utils/images";
import { ArrowDown, ArrowRight, Download, MessageCircle } from "lucide-react";

function useTypingWords(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setCharacterCount(words[0]?.length ?? 0);
      return;
    }

    const currentWord = words[wordIndex] ?? "";
    const isWordComplete = characterCount === currentWord.length;
    const isWordCleared = characterCount === 0;
    const delay = isWordComplete && !isDeleting ? 1200 : isDeleting ? 38 : 72;

    const timeoutId = window.setTimeout(() => {
      if (isWordComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isWordCleared && isDeleting) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setCharacterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [characterCount, isDeleting, reduceMotion, wordIndex, words]);

  const currentWord = words[wordIndex] ?? "";
  return currentWord.slice(0, characterCount);
}

export function HeroSection() {
  const typedRole = useTypingWords(heroRoles);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const particleCount = isMobile ? 6 : 14;
  const hasPortrait = isValidImageSrc(heroContent.portraitSrc);

  useEffect(() => {
    const onScroll = () => setShowScrollIndicator(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden"
      onPointerMove={(event) => {
        if (isMobile || reduceMotion) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setSpotlight({ x, y });
        setParallax({
          x: (x - 50) * 0.08,
          y: (y - 50) * 0.08,
        });
      }}
    >
      <HeroReveal step="background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.18),transparent_70%),linear-gradient(135deg,rgba(6,182,212,0.08),transparent_35%,rgba(124,58,237,0.08))]"
        />
      </HeroReveal>

      <HeroReveal step="aurora">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          animate={
            reduceMotion || isMobile
              ? undefined
              : {
                  background: [
                    `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, rgba(148,163,184,0.11), transparent 42%)`,
                    `radial-gradient(560px circle at ${spotlight.x + 2}% ${spotlight.y - 2}%, rgba(6,182,212,0.12), transparent 44%)`,
                    `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, rgba(148,163,184,0.11), transparent 42%)`,
                  ],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, rgba(148,163,184,0.11), transparent 42%)`,
          }}
        />
      </HeroReveal>

      {!isMobile && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        />
      )}

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: particleCount }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute size-1 rounded-full bg-cyan/45"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${16 + ((index * 53) % 68)}%`,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.15, 0.65, 0.15],
                    y: [0, -12, 0],
                  }
            }
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.12,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container className="relative grid gap-12 py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <HeroReveal step="typing">
            <p className="mb-5 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 font-mono text-sm text-cyan">
              <span className="min-w-[18rem]">
                {typedRole}
                <span className="ml-1 animate-pulse text-text-primary">|</span>
              </span>
            </p>
          </HeroReveal>

          <HeroReveal step="headline">
            <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              {heroContent.headline}
            </h1>
          </HeroReveal>

          <HeroReveal step="subheadline">
            <p className="mt-7 max-w-2xl text-lg text-text-secondary md:text-xl">
              {heroContent.subheadline}
            </p>
          </HeroReveal>

          <HeroReveal step="cta">
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href={heroContent.ctas.primary.href} size="lg">
                {heroContent.ctas.primary.label}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink
                href={heroContent.ctas.secondary.href}
                variant="secondary"
                size="lg"
                download="Avaneesh-GB-Resume.pdf"
              >
                {heroContent.ctas.secondary.label}
                <Download className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={heroContent.ctas.tertiary.href} variant="ghost" size="lg">
                {heroContent.ctas.tertiary.label}
                <MessageCircle className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </HeroReveal>

          <HeroReveal step="stats">
            <dl className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  }
                />
              ))}
            </dl>
          </HeroReveal>
        </div>

        <HeroReveal step="portrait">
          <motion.div
            className="relative order-1 mx-auto aspect-square w-full max-w-[28rem] lg:order-2"
            animate={
              reduceMotion || isMobile
                ? undefined
                : { x: parallax.x, y: parallax.y }
            }
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <motion.div
              aria-hidden
              className="absolute inset-8 rounded-full bg-[conic-gradient(from_180deg,rgba(37,99,235,0.35),rgba(6,182,212,0.18),rgba(124,58,237,0.35),rgba(37,99,235,0.35))] blur-3xl"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [0, 8, 0], scale: [1, 1.05, 1] }
              }
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative size-full overflow-hidden rounded-full border border-white/10 bg-white/[0.04] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              {hasPortrait ? (
                <SafeImage
                  src={heroContent.portraitSrc}
                  alt={heroContent.portraitAlt}
                  className="size-full rounded-full object-cover object-center"
                  loading="eager"
                />
              ) : (
                <div className="grid size-full place-items-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_15%,rgba(248,250,252,0.14),rgba(17,24,39,0.72)_48%,rgba(7,9,15,0.95))]">
                  <div className="text-center">
                    <p className="font-heading text-7xl font-semibold tracking-tight text-text-primary md:text-8xl">
                      {heroContent.monogram}
                    </p>
                    <p className="mt-3 font-mono text-sm text-cyan">{heroContent.tagline}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </HeroReveal>
      </Container>

      {showScrollIndicator && (
        <HeroReveal step="scroll">
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-secondary transition-colors hover:text-text-primary md:flex"
            aria-label="Scroll to about section"
            data-cursor-hover
          >
            <span className="grid h-10 w-6 place-items-start rounded-full border border-white/20 p-1">
              <motion.span
                className="mx-auto block size-1.5 rounded-full bg-cyan"
                animate={
                  reduceMotion ? undefined : { y: [0, 16, 0], opacity: [1, 0.35, 1] }
                }
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <ArrowDown className="size-4" aria-hidden />
          </a>
        </HeroReveal>
      )}
    </section>
  );
}
