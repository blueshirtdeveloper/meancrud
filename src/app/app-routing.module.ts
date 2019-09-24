import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MviAddComponent } from './mvi-add/mvi-add.component';
import { MviEditComponent } from './mvi-edit/mvi-edit.component';
import { MviGetComponent } from './mvi-get/mvi-get.component';



const routes: Routes = [
  {
    path: 'business/create',
    component: MviAddComponent
  },
  {
    path: 'business/edit/:id',
    component: MviEditComponent
  },
  {
    path: 'business',
    component: MviGetComponent
  },
  { path: '',
    redirectTo: 'business/create',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
