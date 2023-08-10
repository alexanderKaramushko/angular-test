import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DateRuPipe } from 'src/app/core/pipes/date-ru.pipe';

import { ProjectsListComponent } from './projects-list.component';

@NgModule({
  declarations: [ProjectsListComponent, DateRuPipe],
  exports: [ProjectsListComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class ProjectsListModule { }
