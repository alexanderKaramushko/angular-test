import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';

const children: Routes = [
  {
    loadChildren: () => import('src/app/pages/project/project.module').then((m) => m.ProjectModule),
    path: ':id',
  },
];

const routes: Routes = [
  {
    children,
    component: ProjectsComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ProjectsRoutingModule { }
