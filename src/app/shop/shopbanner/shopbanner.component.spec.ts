import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbannerComponent } from './shopbanner.component';

describe('ShopbannerComponent', () => {
  let component: ShopbannerComponent;
  let fixture: ComponentFixture<ShopbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopbannerComponent]
    });
    fixture = TestBed.createComponent(ShopbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
