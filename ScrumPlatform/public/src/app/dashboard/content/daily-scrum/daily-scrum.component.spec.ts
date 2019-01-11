import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyScrumComponent } from './daily-scrum.component';

describe('DailyScrumComponent', () => {
  let component: DailyScrumComponent;
  let fixture: ComponentFixture<DailyScrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyScrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
