import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininsuranceComponent } from './admininsurance.component';

describe('AdmininsuranceComponent', () => {
  let component: AdmininsuranceComponent;
  let fixture: ComponentFixture<AdmininsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmininsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
