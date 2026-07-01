import { useEffect, useState } from "react";
import { aboutStory } from "@/data";
import { socials } from "@/data";
import { useToast } from "@/context/ToastContext";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEggs() {
  const { showToast } = useToast();
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    const resume = socials.find((social) => social.id === "resume");
    const github = socials.find((social) => social.id === "github");

    function onKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "r" && resume) {
        event.preventDefault();
        window.open(resume.href, "_blank");
        showToast("Opening resume...");
      }

      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "g" && github) {
        event.preventDefault();
        window.open(github.href, "_blank");
        showToast("Opening GitHub...");
      }

      if (event.ctrlKey && event.shiftKey && event.key === "?") {
        event.preventDefault();
        showToast(aboutStory.philosophy);
      }

      const expected = KONAMI[konamiIndex];
      if (event.key === expected) {
        const next = konamiIndex + 1;
        if (next === KONAMI.length) {
          showToast("Built with curiosity, engineering discipline, and restraint.");
          setKonamiIndex(0);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(event.key === KONAMI[0] ? 1 : 0);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [konamiIndex, showToast]);

  return null;
}
