import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsFormComponent } from './projects-form.component';

const routes: Routes = [
  {
    component: ProjectsFormComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ProjectsFormRoutingModule { }
