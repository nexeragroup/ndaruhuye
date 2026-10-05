import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home-module').then((module) => module.HomeModule),
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/about/about-module').then((module) => module.AboutModule),
  },
  {
    path: 'skills',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/skills/skills-module').then((module) => module.SkillsModule),
  },
  {
    path: 'services',
    loadChildren: () => import('./features/services/services-module').then((m) => m.ServicesModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/projects/projects-module').then((m) => m.ProjectsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact-module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
