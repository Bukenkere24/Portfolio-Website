import { PROJECT_IMAGE_BASE } from "@/constants/assets";

export function getProjectImagePath(projectId: string, filename: string) {
  return `${PROJECT_IMAGE_BASE}/${projectId}/${filename}`;
}

export function getPortraitImagePath(filename: string) {
  return `/images/me/${filename}`;
}

export function isValidImageSrc(src?: string) {
  return Boolean(src && src.trim().length > 0);
}

export function getImageFallbackLabel(alt: string) {
  return alt || "Image unavailable";
}
