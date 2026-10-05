import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing-module';
import { ContactPage } from './pages/contact-page/contact-page';

@NgModule({
  declarations: [ContactPage],
  imports: [ReactiveFormsModule, ContactRoutingModule],
})
export class ContactModule {}
