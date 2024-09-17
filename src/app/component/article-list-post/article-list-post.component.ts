import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesListPost } from './../../interfaces/articles-list';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ArticlesList } from 'src/app/interfaces/articles-list';

@Component({
  selector: 'app-article-list-post',
  templateUrl: './article-list-post.component.html',
  styleUrls: ['./article-list-post.component.css']
})
export class ArticleListPostComponent {
articlelist : ArticlesListPost= new ArticlesListPost();
articleListPost!:number;
articlelistData!:ArticlesListPost;
articleListId!: number;
MemberuniqueId!: number;
constructor (
  private dataService:DataService,
  private authService:AuthService,
  private activatedRoute: ActivatedRoute,
  private router:Router

){}

ngOnInit(data: ArticlesListPost): void {
  this.activatedRoute.paramMap.subscribe((params) => {
    this.articleListId = Number(params.get('id')); //取得URL ID 並轉回number
  });
console.log(this.articleListId);


}

postArticleData(){
if(this.articlelist.ArticleListId){

}
else{

}

  this.articlelist.MemberuniqueId = this.authService.baseUserInfo.memberId;
  this.dataService.postArticleList(this.articlelist).subscribe(res=>{
    console.log(res);


})

console.log(this.articlelist);

console.log(this.articleListPost);
}

getarticleListData(data:ArticlesListPost) {
  data.MemberuniqueId = this.authService.baseUserInfo.memberId;
  this.dataService.getArticlesList().subscribe((res) => {
    console.log(res);

  });
}

}
