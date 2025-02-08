import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHomeUiComponent } from './order-home-ui.component';

describe('OrderHomeUiComponent', () => {
  let component: OrderHomeUiComponent;
  let fixture: ComponentFixture<OrderHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHomeUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
