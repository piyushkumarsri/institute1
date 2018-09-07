import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmChaptersComponent } from './adm-chapters.component';

describe('AdmChaptersComponent', () => {
  let component: AdmChaptersComponent;
  let fixture: ComponentFixture<AdmChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
