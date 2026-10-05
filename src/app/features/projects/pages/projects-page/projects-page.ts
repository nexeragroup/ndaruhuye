import { Component } from '@angular/core';
import { Project, ProjectPrinciple } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-projects-page',
  standalone: false,
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  readonly projects: Project[] = [
    {
      id: 'daily-infrastructure-digest',
      number: '01',
      category: 'Infrastructure intelligence',
      title: 'Daily Infrastructure Digest System',
      description:
        'An AI-enabled platform for aggregating, organizing, and sharing infrastructure information with greater clarity and speed.',
      role: 'Full-stack engineering · Architecture · AI integration',
      status: 'Live',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'AI', 'Automation'],
      url: 'https://digest.mininfra.gov.rw/',
      linkText: 'Visit platform',
      featured: true,
    },
    {
      id: 'national-zoning',
      number: '02',
      category: 'Public information',
      title: 'National Zoning Regulation Platform',
      description:
        'A national digital platform that makes zoning regulations easier to access and navigate through a structured public experience.',
      role: 'Full-stack development · Platform engineering',
      status: 'Live',
      technologies: ['Angular', 'Backend APIs', 'Database', 'Infrastructure'],
      url: 'https://zoning.mininfra.gov.rw/',
      linkText: 'Visit platform',
    },
    {
      id: 'akagera-aviation',
      number: '03',
      category: 'Operational systems',
      title: 'Akagera Aviation Inventory Management System',
      description:
        'An inventory management platform designed around aviation operations, asset visibility, and structured internal workflows.',
      role: 'System design · Full-stack development',
      technologies: ['Web application', 'Backend', 'Database', 'Inventory workflows'],
    },
    {
      id: 'kubaka-bpmis',
      number: '04',
      category: 'Business process management',
      title: 'Kubaka BPMIS',
      description:
        'A digital system supporting structured infrastructure business processes and more consistent operational workflows.',
      role: 'Software engineering · Systems integration',
      status: 'Live',
      technologies: ['Full stack', 'APIs', 'Database', 'Workflow systems'],
      url: 'https://kubaka.gov.rw/',
      linkText: 'Visit platform',
    },
    {
      id: 'mina-ai',
      number: '05',
      category: 'Artificial intelligence',
      title: 'MINA AI',
      description:
        'An AI-focused application within the infrastructure information ecosystem, designed to make information easier to discover and use.',
      role: 'AI integration · Application engineering',
      status: 'Development',
      technologies: ['Generative AI', 'AI agents', 'APIs', 'Information retrieval'],
      url: 'https://testing-digest.mininfra.gov.rw/mina/',
      linkText: 'Explore MINA AI',
    },
    {
      id: 'ndaruhuye',
      number: '06',
      category: 'Digital platform',
      title: 'Ndaruhuye',
      description:
        'A personal portfolio that presents software engineering, systems, data, and AI work through a clear online experience.',
      role: 'Full-stack development · Product delivery',
      status: 'Live',
      technologies: ['Web development', 'Backend', 'Database', 'Deployment'],
      url: 'https://ndaruhuye.nexeragroup.rw/',
      linkText: 'Visit website',
    },
  ];

  readonly projectPrinciples: ProjectPrinciple[] = [
    {
      number: '01',
      label: 'Understand',
      title: 'Start with the problem',
      description:
        'Understand the people, workflows, constraints, information, and real operational problem before deciding what should be built.',
    },
    {
      number: '02',
      label: 'Design',
      title: 'Shape the system',
      description:
        'Translate requirements into architecture, data models, interfaces, integrations, security boundaries, and a practical delivery plan.',
    },
    {
      number: '03',
      label: 'Build',
      title: 'Connect the layers',
      description:
        'Develop the frontend, backend, data, integrations, automation, and infrastructure as parts of one complete system.',
    },
    {
      number: '04',
      label: 'Deliver',
      title: 'Move into operation',
      description:
        'Deploy, secure, monitor, improve, and support the system so it can create value beyond the development environment.',
    },
  ];

  get featuredProject(): Project {
    return this.projects.find((project) => project.featured) ?? this.projects[0];
  }

  get remainingProjects(): Project[] {
    return this.projects.filter((project) => !project.featured);
  }
}
