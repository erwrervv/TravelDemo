import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveltwComponent } from './traveltw.component';

describe('TraveltwComponent', () => {
  let component: TraveltwComponent;
  let fixture: ComponentFixture<TraveltwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraveltwComponent]
    });
    fixture = TestBed.createComponent(TraveltwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
