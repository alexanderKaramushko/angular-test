import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [],
  exports: [TabsModule],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    AlertModule.forRoot(),
  ],
})
export class SharedModule { }
