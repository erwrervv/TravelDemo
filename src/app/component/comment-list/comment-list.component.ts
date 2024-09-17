import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Comments, CommentsPost } from 'src/app/interfaces/comments';

import { AuthService } from 'src/app/auth.service';
import { BasicMemberInformation } from 'src/app/interfaces/basicMemberInformation';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [DataService],
})
export class CommentListComponent implements OnInit {
  items: Comments[] = [];
  commentsData: CommentsPost = new CommentsPost();
  likes: any;
  basicmember!: BasicMemberInformation;
  articleId!: number;
  constructor(
    public dataService: DataService,
    public authService: AuthService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articleId = Number(this.activatedRoute.snapshot.paramMap.get('id')); //取route Id
    this.loadComments(this.articleId);
    this.getMemberData();
  }

  loadComments(articleId: number): void {
    this.dataService.getComments(articleId).subscribe((data) => {
      if (data) {
        this.items = data;
      }
    });
  }
  postCommentsData() {
    console.log(this.commentsData);
    this.commentsData.ArticleId = this.articleId;
    this.commentsData.MemberuniqueId = this.basicmember.MemberuniqueId;

    this.dataService.postComments(this.commentsData).subscribe(
      (res) => {
        // this.commentsData= res;
        alert('成功');
        this.loadComments(this.articleId);
        this.getMemberData();
      },
      (err) => {
        alert('err');
      }
    );
  }
  getMemberData() {
    this.dataService
      .getBasicMember(this.authService.baseUserInfo.memberId)
      .subscribe((res) => {
        this.basicmember = res;
      });
  }
}
