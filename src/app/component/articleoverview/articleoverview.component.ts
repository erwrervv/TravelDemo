import { NgIfContext } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable} from 'rxjs';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';

@Component({
  selector: 'app-articleoverview',
  templateUrl: './articleoverview.component.html',
  styleUrls: ['./articleoverview.component.css']
})
export class ArticleoverviewComponent implements OnInit {
  articleId: any;
likes() {
throw new Error('Method not implemented.');
}

  imageUrls: { [key: number]: string } = {};
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.loadArticle(id);
    });
  }

  loadArticle(id: number): void {
    this.dataService.getArticleById(id).subscribe(data => {
      this.articleId = data;
      if (data.ArticleCoverImage) {
        this.imageUrls[data.ArticleId] = `data:image/png;base64,${data.ArticleCoverImage}`;
      }
    });
  }

  // likes(): void {
  //   this.articleId.ArticleLikes++;
  // }

  followAuthor(): void {
    console.log('已關注作者');
  }
}
