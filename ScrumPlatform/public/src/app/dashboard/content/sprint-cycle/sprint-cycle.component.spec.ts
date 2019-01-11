import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintCycleComponent } from './sprint-cycle.component';

describe('SprintCycleComponent', () => {
  let component: SprintCycleComponent;
  let fixture: ComponentFixture<SprintCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
