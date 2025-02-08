import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoggedinComponent } from './footer-loggedin.component';

describe('FooterLoggedinComponent', () => {
  let component: FooterLoggedinComponent;
  let fixture: ComponentFixture<FooterLoggedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLoggedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
