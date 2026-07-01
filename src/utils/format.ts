export function formatDateRange(startDate: string, endDate: string | null) {
  if (endDate) {
    return `${startDate} - ${endDate}`;
  }
  return `${startDate} - Present`;
}

export function formatYear(year: number) {
  return String(year);
}
