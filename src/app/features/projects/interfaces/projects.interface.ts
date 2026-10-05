export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  role: string;
  year?: string;
  status?: string;
  technologies: string[];
  url?: string;
  linkText?: string;
  featured?: boolean;
}

export interface ProjectPrinciple {
  number: string;
  label: string;
  title: string;
  description: string;
}
