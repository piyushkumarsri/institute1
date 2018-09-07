import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBatchCreationComponent } from './adm-batch-creation.component';

describe('AdmBatchCreationComponent', () => {
  let component: AdmBatchCreationComponent;
  let fixture: ComponentFixture<AdmBatchCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmBatchCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmBatchCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
