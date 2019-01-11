import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumMasterComponent } from './scrum-master.component';

describe('ScrumMasterComponent', () => {
  let component: ScrumMasterComponent;
  let fixture: ComponentFixture<ScrumMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
