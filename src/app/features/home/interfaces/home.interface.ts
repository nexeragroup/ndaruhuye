export interface ProfessionalHighlight {
  title: string;
  description: string;
}

export interface ImpactArea {
  modifier: string;
  label: string;
  title: string;
  description: string;
}

export interface Project {
  modifier: string;
  label: string;
  title: string;
  description: string;
  url?: string;
  linkText?: string;
}

export interface Experience {
  period: string;
  type: string;
  title: string;
  organization?: string;
  description: string;
  current?: boolean;
}

export interface Capability {
  modifier: string;
  label: string;
  title: string;
  skills: string[];
}
