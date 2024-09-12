import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
interface Comment {
  userAvatar: string;
  username: string;
  time: Date;
  content: string;
  likes: number;
}
interface Comment {
  title: string;
  text: string;
  date: Date;
  likes: number;
}

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  data$: Observable<any[]> | undefined;
  imageUrls: { [key: number]: string } = {};
loading: TemplateRef<NgIfContext<any[] | null>> | null | undefined;

  constructor(private dataService: DataService) { }

  comments: Comment[] = [
    {
      userAvatar: 'path/to/avatar.png', // 會員頭像
      username: '暱稱',
      time: new Date('2024-09-10T00:00:00'),
      content: '一段評論',
      likes: 0,
      title: '',
      text: '',
      date: new Date('2024-09-10T00:00:00'),
    }
  ];
  ngOnInit(): void {
    // 初始化評論數據（可以替換為從服務器獲取的數據）
    this.comments = [
      {
        userAvatar: 'assets/avatar1.png',
        username: 'Glamourgonn',
        time: new Date(),
        content: '心虛咯retard, 你們寫大方向子寫了2秒，老等了才把課本按好沒關詞',
        likes: 87,
        title: '',
        text: '',
        date: new Date(),
      },
      {
        userAvatar: 'assets/avatar2.png',
        username: '木木彬彬',
        time: new Date(),
        content: 'Take this! : tayler hills',
        likes: 231,
        title: '',
        text: '',
        date: new Date(),
      },
      // 更多評論數據...
    ];

  }

  likeComment(comment: Comment): void {
    comment.likes++;
  }

  replyComment(comment: Comment): void {
    console.log('Reply to comment:', comment);
    // 可以添加回覆功能的邏輯
  }



}
