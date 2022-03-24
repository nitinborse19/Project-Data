import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclaimComponent } from './adminclaim.component';

describe('AdminclaimComponent', () => {
  let component: AdminclaimComponent;
  let fixture: ComponentFixture<AdminclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
