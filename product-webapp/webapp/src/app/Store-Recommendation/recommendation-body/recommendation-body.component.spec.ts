import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationBodyComponent } from './recommendation-body.component';

describe('RecommendationBodyComponent', () => {
  let component: RecommendationBodyComponent;
  let fixture: ComponentFixture<RecommendationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
