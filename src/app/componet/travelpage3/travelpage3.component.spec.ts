import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travelpage3Component } from './travelpage3.component';

describe('Travelpage3Component', () => {
  let component: Travelpage3Component;
  let fixture: ComponentFixture<Travelpage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Travelpage3Component]
    });
    fixture = TestBed.createComponent(Travelpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
