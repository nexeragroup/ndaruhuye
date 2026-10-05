import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPage } from './pages/contact-page/contact-page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage,
    title: 'Contact Ndaruhuye | Software Engineer',
    data: {
      seo: {
        title: 'Contact Ndaruhuye | Software Engineer',
        description:
          'Contact Ndaruhuye about software engineering, digital platforms, system architecture, data and AI solutions, automation, and technology consulting.',
        url: '/contact',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
