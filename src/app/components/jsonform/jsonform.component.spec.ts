import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONFormComponent } from './jsonform.component';

describe('JSONFormComponent', () => {
  let component: JSONFormComponent;
  let fixture: ComponentFixture<JSONFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JSONFormComponent],
    });
    fixture = TestBed.createComponent(JSONFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
