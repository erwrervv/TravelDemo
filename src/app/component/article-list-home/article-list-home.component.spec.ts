import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListHomeComponent } from './article-list-home.component';

describe('ArticleListHomeComponent', () => {
  let component: ArticleListHomeComponent;
  let fixture: ComponentFixture<ArticleListHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleListHomeComponent]
    });
    fixture = TestBed.createComponent(ArticleListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
