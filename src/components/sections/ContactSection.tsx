import { Mail } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/constants/site";
import { socials } from "@/data";

export function ContactSection() {
  const resume = socials.find((social) => social.id === "resume");

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto grid max-w-6xl gap-10 rounded-project border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-cyan">
                Contact
              </p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-5 text-lg text-text-secondary">
                Open to internships, engineering roles, AI/backend work, and
                practical software projects with real-world impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={`mailto:${site.email}`} variant="secondary">
                  <Mail className="size-4" aria-hidden />
                  Email directly
                </ButtonLink>
                {resume && (
                  <ButtonLink
                    href={resume.href}
                    variant="ghost"
                    download={resume.href.endsWith(".pdf") ? "Avaneesh-GB-Resume.pdf" : undefined}
                  >
                    Download Resume
                  </ButtonLink>
                )}
              </div>
            </div>

            <ContactForm />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
