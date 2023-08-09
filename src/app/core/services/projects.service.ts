import { Injectable } from '@angular/core';

import { Project, Projects } from 'src/app/core/models/project.model';
import {
  getProjects as getProjectsFromLocalStorage,
  safeParse,
  saveProjects as saveProjectsToLocalStorage,
} from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  projects: Project[] = [];

  // eslint-disable-next-line class-methods-use-this
  saveProjects(projects: string) {
    saveProjectsToLocalStorage(projects);

    // todo убрать сайд-эффект через rxjs
    this.projects = this.getProjects();
  }

  // eslint-disable-next-line class-methods-use-this
  getProjects() {
    const projects = getProjectsFromLocalStorage();

    if (projects) {
      // todo убрать сайд-эффект через rxjs
      this.projects = safeParse<Projects>(projects).Projects;

      return safeParse<Projects>(projects).Projects;
    }

    return [];
  }

  getProjectsById(id: ProjectId) {
    const projects = this.getProjects() ?? [];

    return projects.find((project) => project.id === id);
  }

  updateProject(editedProject: Partial<Project>) {
    const projects = this.getProjects() ?? [];

    const updatedProjects = projects.reduce((acc, oldProject) => {
      if (oldProject.id === editedProject.id) {
        return [
          ...acc,
          {
            ...oldProject,
            ...editedProject,
          },
        ];
      }

      return [...acc, oldProject];
    }, []);

    this.saveProjects(JSON.stringify({
      Projects: updatedProjects,
    }));

    // todo убрать сайд-эффект через rxjs
    this.projects = this.getProjects();
  }

}
