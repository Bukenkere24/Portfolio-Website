import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme(defaultTheme: Theme = "dark") {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return { theme, setTheme, toggleTheme };
}
