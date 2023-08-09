import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const children: Routes = [
  {
    loadChildren: () => import('src/app/pages/projects-form/projects-form.module').then((m) => m.ProjectsFormModule),
    path: 'form',
  },
  {
    loadChildren: () => import('src/app/pages/projects/projects.module').then((m) => m.ProjectsModule),
    path: 'projects',
  },
];

const routes: Routes = [
  {
    children,
    component: MainComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule { }
