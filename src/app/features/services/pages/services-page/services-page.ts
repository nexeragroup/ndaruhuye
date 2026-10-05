import { Component } from '@angular/core';
import { EngagementStep, Service, ServiceArea } from '../../interfaces/services.interface';

@Component({
  selector: 'app-services-page',
  standalone: false,
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  readonly services: Service[] = [
    {
      id: 'digital-platforms',
      number: '01',
      label: 'Build',
      title: 'Digital Platforms & Applications',
      description:
        'Design and development of reliable web and mobile systems built around real organizational workflows and user needs.',
      capabilities: [
        'Web applications',
        'Business platforms',
        'Internal systems',
        'Mobile applications',
        'Dashboards',
        'Administrative portals',
      ],
      outcome:
        'A complete digital product designed for real users, operations, and long-term growth.',
    },
    {
      id: 'architecture',
      number: '02',
      label: 'Design',
      title: 'Software Architecture & Backend Systems',
      description:
        'Architecture and backend engineering for systems that need dependable APIs, integrations, security, and maintainable business logic.',
      capabilities: [
        'System architecture',
        'REST & GraphQL APIs',
        'Database design',
        'Authentication',
        'Systems integration',
        'Real-time services',
      ],
      outcome: 'A technical foundation that is easier to maintain, integrate, secure, and scale.',
    },
    {
      id: 'data-ai',
      number: '03',
      label: 'Intelligence',
      title: 'Data, AI & Automation',
      description:
        'AI-enabled and data-driven solutions that make information easier to access, automate repetitive work, and support better decisions.',
      capabilities: [
        'AI-enabled applications',
        'AI agents',
        'Generative AI',
        'Workflow automation',
        'Data integration',
        'Information systems',
      ],
      outcome:
        'Information and repetitive processes transformed into useful intelligence and automation.',
    },
    {
      id: 'modernization',
      number: '04',
      label: 'Transform',
      title: 'Digital Transformation & Modernization',
      description:
        'Improving manual, fragmented, or outdated processes through better system design, integration, and digital workflows.',
      capabilities: [
        'Process digitization',
        'Legacy modernization',
        'Workflow redesign',
        'System integration',
        'Technical assessment',
        'Platform improvement',
      ],
      outcome:
        'Simpler operations, connected information, and technology aligned with how the organization actually works.',
    },
    {
      id: 'cloud-devops',
      number: '05',
      label: 'Deliver',
      title: 'Cloud, DevOps & Production Delivery',
      description:
        'Production-focused engineering covering deployment, containers, web infrastructure, security configuration, and delivery automation.',
      capabilities: ['Docker', 'Kubernetes', 'CI / CD', 'Linux servers', 'Nginx', 'SSL / TLS'],
      outcome:
        'Software that moves reliably from development into secure, maintainable production environments.',
    },
    {
      id: 'consulting',
      number: '06',
      label: 'Advise',
      title: 'Technology Consulting & Technical Direction',
      description:
        'Technical support for teams and organizations making decisions about architecture, platforms, integrations, AI, and digital initiatives.',
      capabilities: [
        'Technical strategy',
        'Architecture reviews',
        'Solution design',
        'Technology selection',
        'Technical planning',
        'Implementation guidance',
      ],
      outcome:
        'Clearer technical decisions and a practical path from business requirements to implementation.',
    },
  ];

  readonly engagementSteps: EngagementStep[] = [
    {
      number: '01',
      label: 'Understand',
      title: 'Define the problem',
      description:
        'Start with the users, operational context, constraints, existing systems, and the outcome the technology needs to support.',
    },
    {
      number: '02',
      label: 'Design',
      title: 'Shape the solution',
      description:
        'Translate the problem into architecture, workflows, data models, integrations, interfaces, and a practical delivery plan.',
    },
    {
      number: '03',
      label: 'Build',
      title: 'Engineer the system',
      description:
        'Develop and integrate the components while continuously validating technical decisions against the real requirements.',
    },
    {
      number: '04',
      label: 'Deliver',
      title: 'Move into operation',
      description:
        'Deploy, secure, monitor, document, and refine the system so it can become part of everyday operations.',
    },
  ];

  readonly serviceAreas: ServiceArea[] = [
    {
      number: '01',
      title: 'Organizations',
      description:
        'Digital platforms, operational systems, automation, and modernization for teams with complex workflows.',
    },
    {
      number: '02',
      title: 'Technical teams',
      description:
        'Architecture, backend development, integrations, infrastructure, and additional engineering capacity.',
    },
    {
      number: '03',
      title: 'Products & initiatives',
      description:
        'Technical execution for ideas that need to move from requirements and prototypes into working systems.',
    },
  ];
}
