import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationbidComponent } from './registrationbid.component';

describe('RegistrationbidComponent', () => {
  let component: RegistrationbidComponent;
  let fixture: ComponentFixture<RegistrationbidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationbidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
