import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRegistrationRoutingModule } from './new-registration-routing.module';
import { PagesModule } from '../../pages.module';
import { ListComponent } from './list/list.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    ListComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    NewRegistrationRoutingModule,
    PagesModule
  ]
})
export class NewRegistrationModule { }
