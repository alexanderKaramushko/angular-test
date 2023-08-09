import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsListModule } from 'src/app/components/projects-list/projects-list.module';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectsListModule,
  ],
})
export class ProjectsModule { }
