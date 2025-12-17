import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasklistApprovalRoutingModule } from './tasklist-approval-routing.module';
import { PagesModule } from '../pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TasklistApprovalRoutingModule,
    PagesModule
  ]
})
export class TasklistApprovalModule { }
