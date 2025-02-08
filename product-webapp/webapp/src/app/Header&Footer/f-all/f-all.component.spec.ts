import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAllComponent } from './f-all.component';

describe('FAllComponent', () => {
  let component: FAllComponent;
  let fixture: ComponentFixture<FAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
