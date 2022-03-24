import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmarketplaceComponent } from './adminmarketplace.component';

describe('AdminmarketplaceComponent', () => {
  let component: AdminmarketplaceComponent;
  let fixture: ComponentFixture<AdminmarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
