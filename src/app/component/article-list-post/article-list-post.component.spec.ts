import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListPostComponent } from './article-list-post.component';

describe('ArticleListPostComponent', () => {
  let component: ArticleListPostComponent;
  let fixture: ComponentFixture<ArticleListPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleListPostComponent]
    });
    fixture = TestBed.createComponent(ArticleListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
