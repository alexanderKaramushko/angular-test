import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  private projectsSource: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);

  projects$ = this.projectsSource.asObservable();

  saveProjects(projects: string) {
    saveProjectsToLocalStorage(projects);

    this.projectsSource.next(this.getProjects());
  }

  getProjects() {
    const projects = getProjectsFromLocalStorage();

    if (projects) {
      const parsedProjects = safeParse<Projects>(projects)?.Projects ?? [];

      this.projectsSource.next(parsedProjects);

      return parsedProjects;
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

    this.projectsSource.next(projects);
  }

}
