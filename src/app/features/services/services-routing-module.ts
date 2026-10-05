import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPage } from './pages/services-page/services-page';

const routes: Routes = [
  {
    path: '',
    component: ServicesPage,
    title: 'Services | Ndaruhuye',
    data: {
      seo: {
        title: 'Services | Ndaruhuye',
        description:
          'Software engineering, digital platforms, system architecture, data and AI solutions, automation, DevOps, and technology consulting services by Ndaruhuye.',
        url: '/services',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
