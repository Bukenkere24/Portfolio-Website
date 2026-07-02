import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

interface MobileNavProps {
  items: readonly { label: string; href: string; id: string }[];
  activeSection: string;
}

export function MobileNav({ items, activeSection }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-9 place-items-center rounded-full text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <nav
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-4 top-20 z-50 rounded-card border border-white/10 bg-background/95 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl transition duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-white/5",
                  activeSection === item.id
                    ? "bg-white/5 text-text-primary"
                    : "text-text-secondary",
                )}
                aria-current={activeSection === item.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
