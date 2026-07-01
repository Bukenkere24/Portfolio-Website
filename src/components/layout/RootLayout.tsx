import { type ReactNode } from "react";
import { Container } from "./Container";
import { Navbar } from "./Navbar";
import { site } from "@/constants/site";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative min-h-dvh bg-background text-text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-button focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        {children}
      </main>

      <footer className="border-t border-white/5 py-12">
        <Container>
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {site.name}. Crafted with intention.
          </p>
        </Container>
      </footer>
    </div>
  );
}
