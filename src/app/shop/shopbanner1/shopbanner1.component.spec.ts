import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopbanner1Component } from './shopbanner1.component';

describe('Shopbanner1Component', () => {
  let component: Shopbanner1Component;
  let fixture: ComponentFixture<Shopbanner1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shopbanner1Component]
    });
    fixture = TestBed.createComponent(Shopbanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
