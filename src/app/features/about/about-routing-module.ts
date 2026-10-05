import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage,
    title: 'About Ndaruhuye | Software Engineer',
    data: {
      seo: {
        title: 'About Ndaruhuye | Software Engineer',
        description:
          'Learn about Ndaruhuye, a software engineer focused on building scalable digital systems, data platforms, AI-enabled solutions, and technology that solves real-world problems.',
        url: '/about',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
