const PLACEHOLDER_PATTERNS = [
  /^https?:\/\/github\.com\/?$/i,
  /^https?:\/\/www\.linkedin\.com\/?$/i,
  /^https?:\/\/linkedin\.com\/?$/i,
  /^https?:\/\/example\.com\/?/i,
  /^mailto:.*@example\.com$/i,
];

export function isValidExternalUrl(url?: string | null): url is string {
  if (!url?.trim()) return false;

  const normalized = url.trim();

  if (normalized.startsWith("/") || normalized.startsWith("#")) {
    return true;
  }

  if (PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return false;
  }

  try {
    const parsed = new URL(normalized);
    return parsed.protocol === "http:" || parsed.protocol === "https:" || parsed.protocol === "mailto:";
  } catch {
    return false;
  }
}

export function isExternalHttpUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}
