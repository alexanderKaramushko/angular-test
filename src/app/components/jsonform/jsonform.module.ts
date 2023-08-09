import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JSONFormComponent } from './jsonform.component';

@NgModule({
  declarations: [JSONFormComponent],
  exports: [JSONFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class JSONFormModule { }
