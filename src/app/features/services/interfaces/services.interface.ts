export interface Service {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  capabilities: string[];
  outcome: string;
}

export interface EngagementStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface ServiceArea {
  number: string;
  title: string;
  description: string;
}
