import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectModule as ProjectDetailsModule } from 'src/app/components/project/project.module';

import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ProjectDetailsModule,
  ],
})
export class ProjectModule { }
