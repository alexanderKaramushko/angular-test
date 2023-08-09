import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [DatePipe],
})
export class ProjectModule { }
