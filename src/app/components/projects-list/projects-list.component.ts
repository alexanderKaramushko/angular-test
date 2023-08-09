import { Component, EventEmitter, Output } from '@angular/core';

import { Project } from 'src/app/core/models/project.model';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'projects-list',
  styleUrls: ['./projects-list.component.css'],
  templateUrl: './projects-list.component.html',
})
export class ProjectsListComponent {

  @Output()
  projectSelected = new EventEmitter<Project>();

  constructor(public projectsService: ProjectsService) { }

  selectProject(project: Project) {
    this.projectSelected.emit(project);
  }

  // eslint-disable-next-line class-methods-use-this
  trackByProjectId(project: Project) {
    return project.id;
  }

}
