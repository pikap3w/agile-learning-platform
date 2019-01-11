import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAgileComponent } from './other-agile.component';

describe('OtherAgileComponent', () => {
  let component: OtherAgileComponent;
  let fixture: ComponentFixture<OtherAgileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAgileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
