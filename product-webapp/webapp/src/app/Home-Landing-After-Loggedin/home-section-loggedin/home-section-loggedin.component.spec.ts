import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionLoggedinComponent } from './home-section-loggedin.component';

describe('HomeSectionLoggedinComponent', () => {
  let component: HomeSectionLoggedinComponent;
  let fixture: ComponentFixture<HomeSectionLoggedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionLoggedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
