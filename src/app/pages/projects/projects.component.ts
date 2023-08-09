import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from 'src/app/core/models/project.model';

@Component({
  selector: 'projects',
  styleUrls: ['./projects.component.css'],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  constructor(private router: Router) { }

  handleProjectSelect(project: Project) {
    this.router.navigate(['projects', project.id]);
  }

}
