import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProjectsFormComponent } from './projects-form.component';

describe('ProjectsFormComponent', () => {
  let component: ProjectsFormComponent;
  let fixture: ComponentFixture<ProjectsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsFormComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(ProjectsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
