import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesListPost } from './../../interfaces/articles-list';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ArticlesList } from 'src/app/interfaces/articles-list';

@Component({
  selector: 'app-article-list-post',
  templateUrl: './article-list-post.component.html',
  styleUrls: ['./article-list-post.component.css'],
})
export class ArticleListPostComponent {
  articlelist: ArticlesListPost = new ArticlesListPost();
  articleListPost!: number;
  articlelistData!: ArticlesListPost;
  articleListId!: number;
  MemberuniqueId!: number;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(data: ArticlesListPost): void {
    this.articleListId = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
    console.log('this.articleListId', this.articleListId);
    this.getData();
  }

  postArticleData() {
    console.log(
      'this.articlelist.ArticleListId',
      this.articlelist.ArticleListId
    );
    if (!this.articlelist.ArticleListId ) {
      this.articlelist.MemberuniqueId = this.authService.baseUserInfo.memberId;
      this.dataService.postArticleList(this.articlelist).subscribe((res) => {
        alert('新增列表成功');
            this.router.navigate([`/article-list`]);
      });
    } else {
      this.dataService
        .putArticleList(this.articleListId, this.articlelist)
        .subscribe(
          (response) => {
            alert('列表修改成功');
            this.router.navigate([`/article-list`]);
          },
          (error) => {
            alert('列表修改失敗');
          }
        );
    }
    console.log(this.articlelist);
    console.log(this.articleListPost);
  }

  getData() {
    this.dataService
      .getArticlesListById(this.articleListId)
      .subscribe((res) => {
        console.log(res);
        this.articlelist = res;
      });
  }
}
