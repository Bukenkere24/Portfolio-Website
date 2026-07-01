export const colors = {
  background: "#07090F",
  surface: "#111827",
  surfaceSecondary: "#1F2937",
  accent: "#2563EB",
  cyan: "#06B6D4",
  purple: "#7C3AED",
  success: "#22C55E",
  textPrimary: "#F8FAFC",
  textSecondary: "#94A3B8",
} as const;

export const spacing = {
  8: 8,
  16: 16,
  24: 24,
  32: 32,
  48: 48,
  64: 64,
  96: 96,
  128: 128,
} as const;

export const radius = {
  button: 16,
  card: 24,
  image: 28,
  project: 32,
} as const;

export const fonts = {
  heading: '"Space Grotesk", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const layout = {
  maxWidth: 1440,
  contentPaddingMobile: 24,
  contentPaddingDesktop: 32,
} as const;

export const shadows = {
  card: "0 16px 50px rgba(0, 0, 0, 0.28)",
  cardHover: "0 24px 64px rgba(0, 0, 0, 0.32)",
  buttonPrimary: "0 8px 30px rgba(37, 99, 235, 0.35)",
  buttonSecondary: "0 8px 30px rgba(0, 0, 0, 0.2)",
} as const;

export const typography = {
  display: "text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight",
  h1: "text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight",
  h2: "text-3xl md:text-4xl font-semibold tracking-tight",
  h3: "text-xl md:text-2xl font-semibold",
  body: "text-base leading-relaxed",
  bodyLarge: "text-lg md:text-xl leading-relaxed",
  caption: "text-sm text-text-secondary",
  mono: "font-mono text-sm",
} as const;

export const cardPadding = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;
