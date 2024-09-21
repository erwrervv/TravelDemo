import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travelpage2Component } from './travelpage2.component';

describe('Travelpage2Component', () => {
  let component: Travelpage2Component;
  let fixture: ComponentFixture<Travelpage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Travelpage2Component]
    });
    fixture = TestBed.createComponent(Travelpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
