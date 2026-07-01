export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "work" | "education" | "project" | "milestone";
}
