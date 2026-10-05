import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { MainLayout } from './main-layout/main-layout';

const LAYOUT_COMPONENTS = [MainLayout, Header, Footer];

@NgModule({
  declarations: LAYOUT_COMPONENTS,
  imports: [CommonModule, RouterModule],
  exports: LAYOUT_COMPONENTS,
})
export class LayoutModule {}
