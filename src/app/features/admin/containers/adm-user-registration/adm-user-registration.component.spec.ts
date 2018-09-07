import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserRegistrationComponent } from './adm-user-registration.component';

describe('AdmUserRegistrationComponent', () => {
  let component: AdmUserRegistrationComponent;
  let fixture: ComponentFixture<AdmUserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmUserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
