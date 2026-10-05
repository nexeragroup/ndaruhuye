import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing-module';
import { HomePage } from './pages/home-page/home-page';

@NgModule({
  declarations: [HomePage],
  imports: [HomeRoutingModule],
})
export class HomeModule {}
