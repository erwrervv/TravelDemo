import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent {
  articleTitle: string = '';
  articleContent: string = '';
  settingsVisible: boolean = false;

  toggleSettings() {
    this.settingsVisible = !this.settingsVisible;
  }

  submitArticle() {
    //用來提交輸入的文章內容
    console.log('提交文章:', this.articleTitle, this.articleContent);

  }




}
