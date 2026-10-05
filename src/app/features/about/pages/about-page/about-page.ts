import { Component } from '@angular/core';
import { Principle, Perspective, JourneyItem } from '../../interfaces/about.interface';

@Component({
  selector: 'app-about-page',
  standalone: false,
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  readonly principles: Principle[] = [
    {
      number: '01',
      title: 'Understand before building',
      description:
        'Good systems begin with understanding the real problem, the people involved, and the operational context around it.',
    },
    {
      number: '02',
      title: 'Design the system',
      description:
        'I think beyond individual screens and features—considering architecture, data flows, integrations, security, and long-term maintainability.',
    },
    {
      number: '03',
      title: 'Build for people',
      description:
        'Technology is useful when it makes work clearer, faster, and more reliable for the people who depend on it.',
    },
    {
      number: '04',
      title: 'Improve with data',
      description:
        'I use data, automation, and AI where they create meaningful improvements—not simply because the technology exists.',
    },
  ];

  readonly perspectives: Perspective[] = [
    {
      label: 'Engineering',
      title: 'Systems, not isolated features',
      description:
        'I enjoy connecting frontend experiences, backend services, databases, infrastructure, and integrations into complete working systems.',
    },
    {
      label: 'Product',
      title: 'Technology with a reason',
      description:
        'Technical decisions should support real objectives. I care about understanding why something needs to exist before deciding how to build it.',
    },
    {
      label: 'Data + AI',
      title: 'Intelligence that is useful',
      description:
        'I am particularly interested in systems that turn information into accessible knowledge, automation, and better decisions.',
    },
    {
      label: 'Delivery',
      title: 'From idea to operation',
      description:
        'Architecture matters, but so does shipping. I value solutions that can move from concept through development and into reliable everyday use.',
    },
  ];

  readonly journey: JourneyItem[] = [
    {
      period: '2025 — Present',
      title: 'Full Stack Developer & Technology Consultant',
      organization: 'Ministry of Infrastructure (MININFRA)',
      description:
        'Designing and developing digital infrastructure platforms, data systems, integrations, and AI-enabled solutions.',
      current: true,
    },
    {
      period: '2021 — Present',
      title: 'Freelance Full Stack Developer',
      description:
        'Building web and mobile products while working across architecture, development, deployment, and automation.',
    },
    {
      period: '2021 — 2022',
      title: 'Web Developer & Network Specialist',
      organization: 'GRIT Rwanda',
      description:
        'Worked across software development, databases, networking, cloud services, and technical infrastructure.',
    },
  ];
}
