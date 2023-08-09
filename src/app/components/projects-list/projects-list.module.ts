import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProjectsListComponent } from './projects-list.component';

@NgModule({
  declarations: [ProjectsListComponent],
  exports: [ProjectsListComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class ProjectsListModule { }
