export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  logo?: string;
  logoClassName?: string;
}
