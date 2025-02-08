import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HAllComponent } from './h-all.component';

describe('HAllComponent', () => {
  let component: HAllComponent;
  let fixture: ComponentFixture<HAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
