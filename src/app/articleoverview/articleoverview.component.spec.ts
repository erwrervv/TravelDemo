import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleoverviewComponent } from './articleoverview.component';

describe('ArticleoverviewComponent', () => {
  let component: ArticleoverviewComponent;
  let fixture: ComponentFixture<ArticleoverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleoverviewComponent]
    });
    fixture = TestBed.createComponent(ArticleoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
