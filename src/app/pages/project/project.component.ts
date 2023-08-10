import { Component, Input } from '@angular/core';

@Component({
  selector: 'project',
  styleUrls: ['./project.component.css'],
  templateUrl: './project.component.html',
})
export class ProjectComponent {

  @Input()
  id?: ProjectId;

}
