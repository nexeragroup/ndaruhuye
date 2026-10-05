import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing-module';
import { ProjectsPage } from './pages/projects-page/projects-page';

@NgModule({
  declarations: [ProjectsPage],
  imports: [ProjectsRoutingModule],
})
export class ProjectsModule {}
