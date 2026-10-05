export interface Principle {
  number: string;
  title: string;
  description: string;
}

export interface Perspective {
  label: string;
  title: string;
  description: string;
}

export interface JourneyItem {
  period: string;
  title: string;
  organization?: string;
  description: string;
  current?: boolean;
}
