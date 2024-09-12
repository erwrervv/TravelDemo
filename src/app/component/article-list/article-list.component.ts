import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles = [
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') },
    { title: '文章名稱', views: 1111, date: new Date('2022-12-01') }
  ];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }
  ngOnInit(): void {}

  // 在這裡添加事件處理器或其他邏輯
}
