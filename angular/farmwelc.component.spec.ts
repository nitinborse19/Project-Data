import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmwelcComponent } from './farmwelc.component';

describe('FarmwelcComponent', () => {
  let component: FarmwelcComponent;
  let fixture: ComponentFixture<FarmwelcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmwelcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmwelcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
