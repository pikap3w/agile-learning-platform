import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPlanningComponent } from './sprint-planning.component';

describe('SprintPlanningComponent', () => {
  let component: SprintPlanningComponent;
  let fixture: ComponentFixture<SprintPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
