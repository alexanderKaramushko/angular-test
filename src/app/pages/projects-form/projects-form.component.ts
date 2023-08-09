import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'projects-form',
  templateUrl: './projects-form.component.html',
})
export class ProjectsFormComponent {

  constructor(private router: Router) { }

  handleJSONInputSave() {
    this.router.navigateByUrl('app/projects');
  }

}
