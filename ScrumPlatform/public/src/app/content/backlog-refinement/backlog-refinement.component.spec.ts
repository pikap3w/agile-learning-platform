import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogRefinementComponent } from './backlog-refinement.component';

describe('BacklogRefinementComponent', () => {
  let component: BacklogRefinementComponent;
  let fixture: ComponentFixture<BacklogRefinementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklogRefinementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogRefinementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
