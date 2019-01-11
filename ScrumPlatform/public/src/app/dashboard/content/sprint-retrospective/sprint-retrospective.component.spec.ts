import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintRetrospectiveComponent } from './sprint-retrospective.component';

describe('SprintRetrospectiveComponent', () => {
  let component: SprintRetrospectiveComponent;
  let fixture: ComponentFixture<SprintRetrospectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintRetrospectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintRetrospectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
