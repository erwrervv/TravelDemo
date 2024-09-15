import { AuthService } from 'src/app/auth.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../../data.service';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NgIfContext } from '@angular/common';
import { Router } from '@angular/router';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';
import { pageinfo } from 'src/app/interfaces/pageInfo';
import { ArticlesList } from 'src/app/interfaces/articles-list';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DataService],
})
export class HomepageComponent implements OnInit {
  data$: Observable<any[]> | undefined;
  imageUrls: { [key: number]: string } = {};
  loading: TemplateRef<NgIfContext<any[] | null>> | null | undefined;
  ArticleOverviewData: Array<Articleoverviews> = new Array<Articleoverviews>();
  page: pageinfo = new pageinfo(5, 1);
  totalPages: number = 0;
  articleListData: Array<ArticlesList> = new Array<ArticlesList>();

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  goToComment(id: number) {
    this.router.navigate([`/article/${id}`]);
  }
  getData() {
    this.dataService.getArticlesPaged(this.page).subscribe((res) => {
      this.ArticleOverviewData = res.List; //賦予資料源
      this.totalPages = res.TotalPages; //賦予總頁數
      this.dataService.getArticlesList().subscribe((res) => {
        this.articleListData = res;
      });
    });
  }
  goToPage(pageNumber: number) {
    if (pageNumber > 0 && pageNumber <= this.totalPages) {
      this.page.PageNumber = pageNumber; //html觸發 event 前往指定分頁
      this.getData();
      window.scrollTo(0, 0); //回到畫面頂端
    }
  }
  next() {
    if (this.page.PageNumber < this.totalPages) {
      this.page.PageNumber++; //HTML觸發EVENT 前往下一頁
      this.getData(); //重新取得資料
      window.scrollTo(0, 0); //回到畫面頂端
    }
  }
  back() {
    if (this.page.PageNumber > 1) {
      this.page.PageNumber--;
      this.getData(); //重新取得資料
      window.scrollTo(0, 0); //回到畫面頂端
    }
  }
}
