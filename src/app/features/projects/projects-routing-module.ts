import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsPage } from './pages/projects-page/projects-page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPage,
    title: 'Selected Work | Ndaruhuye',
    data: {
      seo: {
        title: 'Selected Work | Ndaruhuye',
        description:
          'Explore digital platforms, operational systems, data products, AI-enabled solutions, and software engineering work by Ndaruhuye.',
        url: '/projects',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
