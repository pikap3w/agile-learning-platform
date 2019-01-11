import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesExerciseComponent } from './stories-exercise.component';

describe('StoriesExerciseComponent', () => {
  let component: StoriesExerciseComponent;
  let fixture: ComponentFixture<StoriesExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
