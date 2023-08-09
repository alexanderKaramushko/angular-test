import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, Subject } from 'rxjs';

import { Project } from 'src/app/core/models/project.model';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'project-details',
  styleUrls: ['./project.component.css'],
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnDestroy {

  constructor(
    public projectsService: ProjectsService,
    private datePipe: DatePipe,
    private changeDetection: ChangeDetectorRef,
  ) { }

  private id$ = new Subject<ProjectId>();
  private project$ = this.id$.pipe(
    map((id) => this.projectsService.getProjectsById(id)),
  );

  private projectSubscription$ = this.project$.subscribe((project) => {
    this.project = project;

    this.startDate = this.datePipe.transform(this.project.startDate, 'y-MM-d');
    this.endDate = this.datePipe.transform(this.project.endDate, 'y-MM-d');

    this.author = this.project.createdBy;
    this.description = this.project.description;
  });

  project?: Project;

  mode = 'view';

  startDate = ''
  endDate = ''
  author = ''
  description = 'www'

  @Input()
  set id(value: ProjectId) {
    this.id$.next(value);
  }

  ngOnDestroy(): void {
    this.projectSubscription$.unsubscribe();
  }

  saveProject(form: NgForm) {
    this.mode = 'view';

    this.projectsService.updateProject({
      createdBy: form.value.author,
      description: form.value.description,
      endDate: form.value.endDate,
      id: this.project.id,
      startDate: form.value.startDate,
    });

    this.project = this.projectsService.getProjectsById(this.project.id);
  }

}
