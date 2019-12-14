import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCakeComponent } from './checkout-cake.component';

describe('CheckoutCakeComponent', () => {
  let component: CheckoutCakeComponent;
  let fixture: ComponentFixture<CheckoutCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
