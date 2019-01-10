import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegComponent } from './login-reg.component';

describe('LoginRegComponent', () => {
  let component: LoginRegComponent;
  let fixture: ComponentFixture<LoginRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
