import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent {
  articleTitle: string = '';
  articleContent: string = '';
  settingsVisible: boolean = false;
  memberId: number = 20; // 假设固定的会员 ID 20

  constructor(private dataService: DataService) {}

  toggleSettings() {
    this.settingsVisible = !this.settingsVisible;
  }

  submitArticle() {
    const article: Articleoverviews = {
      ArticleId: 0, // 新文章的 ID 一般由后端生成
      MemberuniqueId: { MemberuniqueId: this.memberId }, // 固定的会员 ID
      ArticleName: this.articleTitle,
      ArticleContent: this.articleContent,
      CreateTime: new Date(),
      UpdateTime: new Date(),
      // ArticleCoverImage: new Uint8Array, // 如果有封面图片，可以在这里处理
      // ArticleCoverImageString: ''
    };

    this.dataService.postArticleOverviews(article).subscribe(response => {
      console.log('文章提交成功:', response);
      // 在这里处理提交成功后的逻辑，比如导航到文章详情页面等
    }, error => {
      console.error('文章提交失败:', error);
      // 在这里处理提交失败后的逻辑
    });
  }
}
