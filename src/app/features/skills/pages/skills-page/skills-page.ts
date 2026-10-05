import { Component } from '@angular/core';
import { SkillGroup, SystemLayer, EngineeringStrength } from '../../interfaces/skills.interface';

@Component({
  selector: 'app-skills-page',
  standalone: false,
  styleUrl: './skills-page.css',
  templateUrl: './skills-page.html',
})
export class SkillsPage {
  readonly skillGroups: SkillGroup[] = [
    {
      id: 'engineering',
      number: '01',
      label: 'Build',
      title: 'Full-stack engineering',
      description:
        'Building complete digital products from responsive interfaces to application architecture and business logic.',
      skills: [
        { name: 'Angular' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'Java' },
      ],
    },
    {
      id: 'backend',
      number: '02',
      label: 'Connect',
      title: 'Backend & APIs',
      description:
        'Designing services, APIs, integrations, authentication flows, and backend systems that connect applications and data.',
      skills: [
        { name: 'NestJS' },
        { name: 'Node.js' },
        { name: 'FastAPI' },
        { name: 'Spring Boot' },
        { name: 'Django' },
        { name: 'REST APIs' },
        { name: 'GraphQL' },
        { name: 'WebSockets' },
      ],
    },
    {
      id: 'data',
      number: '03',
      label: 'Learn',
      title: 'Data & AI',
      description:
        'Creating data-driven and AI-enabled systems that transform information into automation, insight, and better decisions.',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'Generative AI' },
        { name: 'AI Agents' },
        { name: 'Workflow Automation' },
        { name: 'Data Integration' },
      ],
    },
    {
      id: 'devops',
      number: '04',
      label: 'Deliver',
      title: 'Cloud & DevOps',
      description:
        'Taking applications beyond development through containers, deployment automation, infrastructure, networking, and production operations.',
      skills: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'GitHub Actions' },
        { name: 'Linux' },
        { name: 'Nginx' },
        { name: 'SSL / TLS' },
        { name: 'CI / CD' },
      ],
    },
  ];

  readonly systemLayers: SystemLayer[] = [
    {
      number: '01',
      label: 'Experience',
      title: 'Interface',
      technologies: 'Angular · React · TypeScript',
    },
    {
      number: '02',
      label: 'Logic',
      title: 'Services',
      technologies: 'NestJS · FastAPI · Spring Boot',
    },
    {
      number: '03',
      label: 'Information',
      title: 'Data',
      technologies: 'PostgreSQL · MySQL · MongoDB',
    },
    {
      number: '04',
      label: 'Intelligence',
      title: 'AI',
      technologies: 'Agents · Generative AI · Automation',
    },
    {
      number: '05',
      label: 'Operation',
      title: 'Infrastructure',
      technologies: 'Docker · Kubernetes · Linux · Nginx',
    },
  ];

  readonly engineeringStrengths: EngineeringStrength[] = [
    {
      number: '01',
      title: 'System architecture',
      description:
        'Breaking complex requirements into maintainable components, services, data models, and integration boundaries.',
    },
    {
      number: '02',
      title: 'Systems integration',
      description:
        'Connecting applications, APIs, databases, external services, and existing operational systems reliably.',
    },
    {
      number: '03',
      title: 'End-to-end delivery',
      description:
        'Working across implementation, testing, deployment, infrastructure, security, and production support.',
    },
    {
      number: '04',
      title: 'Technical problem solving',
      description:
        'Working through ambiguous requirements and technical constraints to find practical solutions that can operate in the real world.',
    },
  ];
}
