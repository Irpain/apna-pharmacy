import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerComponent } from './buyer-product.component';

describe('HomeComponent', () => {
  let component: BuyerComponent;
  let fixture: ComponentFixture<BuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
