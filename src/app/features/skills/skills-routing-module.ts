import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsPage } from './pages/skills-page/skills-page';

const routes: Routes = [
  {
    path: '',
    component: SkillsPage,
    title: 'Skills & Expertise | Ndaruhuye',
    data: {
      seo: {
        title: 'Skills & Expertise | Ndaruhuye',
        description:
          'Explore Ndaruhuye’s expertise in full-stack software engineering, backend systems, APIs, databases, AI, automation, cloud infrastructure, and DevOps.',
        url: '/skills',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
