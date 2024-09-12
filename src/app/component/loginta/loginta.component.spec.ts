import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintaComponent } from './loginta.component';

describe('LogintaComponent', () => {
  let component: LogintaComponent;
  let fixture: ComponentFixture<LogintaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogintaComponent]
    });
    fixture = TestBed.createComponent(LogintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
