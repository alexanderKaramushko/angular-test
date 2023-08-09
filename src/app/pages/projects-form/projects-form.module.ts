import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JSONFormModule } from 'src/app/components/jsonform/jsonform.module';

import { ProjectsFormComponent } from './projects-form.component';
import { ProjectsFormRoutingModule } from './projects-form-routing.module';

@NgModule({
  declarations: [ProjectsFormComponent],
  imports: [
    CommonModule,
    ProjectsFormRoutingModule,
    JSONFormModule,
  ],
})
export class ProjectsFormModule { }
