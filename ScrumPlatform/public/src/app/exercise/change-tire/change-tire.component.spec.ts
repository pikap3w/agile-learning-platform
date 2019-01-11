import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTireComponent } from './change-tire.component';

describe('ChangeTireComponent', () => {
  let component: ChangeTireComponent;
  let fixture: ComponentFixture<ChangeTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
