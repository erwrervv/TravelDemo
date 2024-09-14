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
      if (data) {
        this.items = data;
      }
    });
  }
  replyComment(comments: Comments) {
    // Implement reply logic
  }
}
