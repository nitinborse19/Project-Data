import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesellComponent } from './placesell.component';

describe('PlacesellComponent', () => {
  let component: PlacesellComponent;
  let fixture: ComponentFixture<PlacesellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
