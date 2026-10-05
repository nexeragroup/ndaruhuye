export interface Skill {
  name: string;
  description?: string;
}

export interface SkillGroup {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface EngineeringStrength {
  number: string;
  title: string;
  description: string;
}

export interface SystemLayer {
  number: string;
  label: string;
  title: string;
  technologies: string;
}
