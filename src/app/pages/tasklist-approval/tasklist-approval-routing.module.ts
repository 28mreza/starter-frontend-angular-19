import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-registration',
    loadChildren: () => import('./new-registration/new-registration.module').then(m => m.NewRegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasklistApprovalRoutingModule { }
