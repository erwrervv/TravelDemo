import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveldetailmanageComponent } from './traveldetailmanage.component';

describe('TraveldetailmanageComponent', () => {
  let component: TraveldetailmanageComponent;
  let fixture: ComponentFixture<TraveldetailmanageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraveldetailmanageComponent]
    });
    fixture = TestBed.createComponent(TraveldetailmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
