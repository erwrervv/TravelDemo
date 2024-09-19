import { AuthService } from 'src/app/auth.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../../data.service';
import { forkJoin, Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { NgIfContext } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
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
  listName!: string;
  totalCount!: number;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getArticlesList();
    this.listName = this.activatedRoute.snapshot.paramMap.get('name')!;
  }

  goToComment(id: number) {
    this.router.navigate([`/article/${id}`]);
  }
  getData(listName?: string) {
    if (listName) {
      this.page.PageNumber = 1;
      this.page.SearchKeyword = undefined;
      this.page.SearchTagName = listName; //點選tag的話會帶入文章分類名稱
    } else if (!this.page.SearchTagName) {
      // 只有在沒有 SearchTagName 時，才重置
      this.page.SearchTagName = undefined;
    }

    this.dataService.getArticlesPaged(this.page).subscribe((res) => {
      this.ArticleOverviewData = res.List; //賦予資料源
      this.totalPages = res.TotalPages; //賦予總頁數
      this.totalCount = res.TotalCount;
      window.scrollTo(0, 0); //回到畫面頂端
    });
  }
  getArticlesList() {
    this.dataService.getArticlesList().subscribe((res) => {
      this.articleListData = res;
    });
  }

  goToPage(pageNumber: number) {
    if (pageNumber > 0 && pageNumber <= this.totalPages) {
      this.page.PageNumber = pageNumber; //html觸發 event 前往指定分頁
      this.getData();
    }
  }
  next() {
    if (this.page.PageNumber < this.totalPages) {
      this.page.PageNumber++; //HTML觸發EVENT 前往下一頁
      this.getData(); //重新取得資料
    }
  }
  back() {
    if (this.page.PageNumber > 1) {
      this.page.PageNumber--;
      this.getData(); //重新取得資料
    }
  }
  resetGetAllData(isSearch: boolean) {
    //如果是搜尋 SearchKeyword不清空 其他則回預設值
    this.page.PageNumber = 1;
    this.page.PageSize = 5;
    if (!isSearch) this.page.SearchKeyword = undefined;
    this.page.SearchTagName = undefined;
    this.getData();
  }
  likeUpdete(id: number, data: Articleoverviews) {
    data.Tag += `,${this.listName}`;
    this.dataService.putArticleOverviews(id, data).subscribe(
      () => {
        alert(`添加喜愛清單成功${this.listName}`);
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
