import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCoursesComponent } from './adm-courses.component';

describe('AdmCoursesComponent', () => {
import { AdmCoursesComponent } from './adm-courses.component';
  let component: AdmCoursesComponent;
  let fixture: ComponentFixture<AdmCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
