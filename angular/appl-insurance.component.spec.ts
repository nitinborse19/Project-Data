import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplInsuranceComponent } from './appl-insurance.component';

describe('ApplInsuranceComponent', () => {
  let component: ApplInsuranceComponent;
  let fixture: ComponentFixture<ApplInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
