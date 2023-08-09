import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'jsonform',
  styleUrls: ['./jsonform.component.css'],
  templateUrl: './jsonform.component.html',
})
export class JSONFormComponent {

  constructor(private projects: ProjectsService) { }

  @Output()
  JSONInputSaved = new EventEmitter<string>();

  JSONInput = '';

  saveJSONInput(form: NgForm) {
    this.projects.saveProjects(form.value.JSONInput);

    this.JSONInputSaved.emit();
  }

}
