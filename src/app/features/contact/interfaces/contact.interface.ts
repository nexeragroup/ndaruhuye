export type ProjectType =
  | 'digital-platform'
  | 'software-development'
  | 'data-ai'
  | 'automation'
  | 'architecture'
  | 'consulting'
  | 'other';

export interface ProjectTypeOption {
  value: ProjectType;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  projectType: ProjectType | '';
  message: string;
}

export interface ContactChannel {
  number: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}
