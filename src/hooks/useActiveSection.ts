import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 120) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    function onScroll() {
      const scrollPosition = window.scrollY + offset;

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const id = sectionIds[index];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, sectionIds]);

  return activeSection;
}
