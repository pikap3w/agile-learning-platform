import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintReviewComponent } from './sprint-review.component';

describe('SprintReviewComponent', () => {
  let component: SprintReviewComponent;
  let fixture: ComponentFixture<SprintReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
