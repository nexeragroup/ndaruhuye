import { Component } from '@angular/core';
import {
  ProfessionalHighlight,
  ImpactArea,
  Project,
  Experience,
  Capability,
} from '../../interfaces/home.interface';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  readonly professionalHighlights: ProfessionalHighlight[] = [
    {
      title: '5+ years',
      description: 'Digital transformation',
    },
    {
      title: 'Full stack',
      description: 'From architecture to delivery',
    },
    {
      title: 'Data + AI',
      description: 'Built for useful decisions',
    },
  ];

  readonly impactAreas: ImpactArea[] = [
    {
      modifier: 'systems',
      label: '01 · Engineering',
      title: 'Scalable systems',
      description:
        'Full-stack platforms shaped around dependable workflows, clear architecture, and useful interfaces.',
    },
    {
      modifier: 'intelligence',
      label: '02 · Intelligence',
      title: 'Data and AI enablement',
      description:
        'Information systems and AI-assisted automation that make insight more accessible and action more timely.',
    },
    {
      modifier: 'leadership',
      label: '03 · Leadership',
      title: 'Product direction',
      description:
        'Technical decisions aligned with real operations, organizational goals, and the people responsible for delivery.',
    },
  ];

  readonly projects: Project[] = [
    {
      modifier: 'digest',
      label: 'Infrastructure intelligence',
      title: 'Daily Infrastructure Digest System',
      description:
        'An AI-enabled platform for aggregating and sharing infrastructure information with greater clarity and speed.',
      url: 'https://digest.mininfra.gov.rw/',
      linkText: 'Visit platform',
    },
    {
      modifier: 'zoning',
      label: 'Public information',
      title: 'National Zoning Regulation Platform',
      description: 'A national digital platform for accessing zoning regulations.',
      url: 'https://zoning.mininfra.gov.rw/',
      linkText: 'Visit platform',
    },
    {
      modifier: 'aviation',
      label: 'Operational systems',
      title: 'Akagera Aviation Inventory Management System',
      description: 'An inventory management system designed for aviation operations.',
    },
    {
      modifier: 'kubaka',
      label: 'Business process management',
      title: 'Kubaka BPMIS',
      description: 'A digital system supporting structured infrastructure business processes.',
      url: 'https://kubaka.gov.rw/',
      linkText: 'Visit platform',
    },
    {
      modifier: 'mina',
      label: 'AI solutions',
      title: 'MINA AI',
      description: 'An AI-focused application in the infrastructure information ecosystem.',
      url: 'https://testing-digest.mininfra.gov.rw/mina/',
      linkText: 'Explore MINA AI',
    },
    {
      modifier: 'ndaruhuye',
      label: 'Portfolio',
      title: 'Ndaruhuye',
      description: 'A portfolio presenting software engineering, systems, data, and AI work.',
      url: 'https://ndaruhuye.nexeragroup.rw/',
      linkText: 'Visit website',
    },
  ];

  readonly experiences: Experience[] = [
    {
      period: '2025 — Present',
      type: 'Current role',
      title: 'Full Stack Developer & Technology Consultant',
      organization: 'Ministry of Infrastructure (MININFRA)',
      description:
        'Leading architecture, application development, database design, and systems integration for AI-enabled infrastructure platforms. Working with stakeholders to turn complex requirements into scalable digital solutions.',
      current: true,
    },
    {
      period: '2021 — Present',
      type: 'Independent work',
      title: 'Freelance Full Stack Developer',
      description:
        'Delivering web and mobile applications end to end—from architecture and development through deployment, maintenance, and AI-assisted workflow automation.',
    },
    {
      period: '2021 — 2022',
      type: 'Infrastructure',
      title: 'Web Developer & Network Specialist',
      organization: 'GRIT Rwanda',
      description:
        'Built web applications and database systems while supporting network infrastructure, cloud services, security configuration, and user-centered digital experiences.',
    },
  ];

  readonly capabilities: Capability[] = [
    {
      modifier: 'engineering',
      label: '01 · Build',
      title: 'Full-stack engineering',
      skills: ['Angular', 'React', 'TypeScript', 'Python', 'Java'],
    },
    {
      modifier: 'backend',
      label: '02 · Connect',
      title: 'Backend and APIs',
      skills: [
        'NestJS',
        'Node.js',
        'FastAPI',
        'Spring Boot',
        'Django',
        'REST',
        'GraphQL',
        'WebSockets',
      ],
    },
    {
      modifier: 'data',
      label: '03 · Learn',
      title: 'Data and AI',
      skills: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'AI agents',
        'Generative AI',
        'Workflow automation',
      ],
    },
    {
      modifier: 'devops',
      label: '04 · Deliver',
      title: 'Cloud and DevOps',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Linux', 'Nginx', 'SSL/TLS'],
    },
  ];
}
