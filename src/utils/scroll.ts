export function scrollToSection(id: string) {
  const element = document.getElementById(id.replace(/^#/, ""));
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
