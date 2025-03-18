import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAdditionalDetailsComponent } from './patient-additional-details.component';

describe('PatientAdditionalDetailsComponent', () => {
  let component: PatientAdditionalDetailsComponent;
  let fixture: ComponentFixture<PatientAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAdditionalDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
