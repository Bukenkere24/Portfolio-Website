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
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  "2xl": 64,
  "3xl": 96,
  "4xl": 128,
} as const;

export const radius = {
  card: 24,
  button: 16,
  image: 28,
  projectWindow: 32,
} as const;

export const fonts = {
  heading: '"Space Grotesk", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;
