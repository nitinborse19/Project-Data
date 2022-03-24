import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidcropComponent } from './bidcrop.component';

describe('BidcropComponent', () => {
  let component: BidcropComponent;
  let fixture: ComponentFixture<BidcropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidcropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
