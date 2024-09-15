import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';
import { ArticlesList } from 'src/app/interfaces/articles-list';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles = [
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
  ];
  articlesListData: Array<ArticlesList> = new Array<ArticlesList>();
  articlesListData$!: Observable<ArticlesList[]>;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getData().then(()=>{
    }).catch(err=>{
    });

  }

  getData(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dataService.getArticlesList().subscribe(
        (res) => {
          this.articlesListData = res;
          resolve();
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  // 在這裡添加事件處理器或其他邏輯
}
