import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOwnerComponent } from './product-owner.component';

describe('ProductOwnerComponent', () => {
  let component: ProductOwnerComponent;
  let fixture: ComponentFixture<ProductOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
