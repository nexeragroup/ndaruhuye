import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Ndaruhuye | Software Engineer',
    data: {
      seo: {
        title: 'Ndaruhuye | Software Engineer',
        description:
          'Ndaruhuye is a software engineer and technology, data, and AI solutions lead building scalable digital systems.',
        url: '/',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
