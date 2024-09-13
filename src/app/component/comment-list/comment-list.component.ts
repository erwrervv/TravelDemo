import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Comments } from 'src/app/interfaces/comments';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [DataService],
})
export class CommentListComponent implements OnInit {
  items: Comments[] = [];
  likes: any;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //取route Id
    this.loadComments(Number(id));
  }

  loadComments(articleId: number): void {
    this.dataService.getComments(articleId).subscribe((data) => {
      this.items = data;
    });
  }

  getCommentsPicture(id: number) {
    this.dataService.getCommentsPicture(id).subscribe((res) => {
      console.log('re', res);
    });
    // if (picture) {
    //   // Assuming the picture is a binary image, convert it to a base64 string
    //   const base64String = btoa(String.fromCharCode(...picture));
    //   return of(`data:image/png;base64,${base64String}`);
    // } else {
    //   // Return a default image path if picture is not available
    //   return of('assets/default-avatar.png');
    // }
  }

  replyComment(comments: Comments) {
    // Implement reply logic
  }
}
