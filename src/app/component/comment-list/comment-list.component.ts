import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Comments } from 'src/app/interfaces/comments';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';
import { BasicMemberInformation } from 'src/app/interfaces/basicMemberInformation';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [DataService]
})
export class CommentListComponent implements OnInit {
  items: Comments[] = [];
  likes: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const articleId = 1; // 假设你要获取 ArticleId 为 1 的评论
    this.loadComments(articleId);
  }

  loadComments(articleId: number): void {
    this.dataService.getComments(articleId).subscribe(data => {
      // this.items = data;
    });
  }

  getCommentsPicture(picture: Uint8Array | undefined): Observable<string> {
    if (picture) {
      // Assuming the picture is a binary image, convert it to a base64 string
      const base64String = btoa(String.fromCharCode(...picture));
      return of(`data:image/png;base64,${base64String}`);
    } else {
      // Return a default image path if picture is not available
      return of('assets/default-avatar.png');
    }
  }

  replyComment(comments: Comments) {
    // Implement reply logic
  }


}
