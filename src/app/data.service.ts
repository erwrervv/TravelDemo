import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';
import { BasicMemberInformation } from 'src/app/interfaces/basicMemberInformation';
import { Comments } from 'src/app/interfaces/comments';
import { ArticlesList } from './interfaces/articles-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private articlesUrl = '/api/ArticleOverviews';
  private CommentsUrl = '/api/Comments';
  private MemberInformationUrl = '/api/BasicMemberInformations';
  private articlesListUrl = '/api/ArticleLists';

  MemberPicture: any;
  constructor(private http: HttpClient) {}
  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.articlesUrl}/${id}`);
  }
  //取得文字資料Articleoverviews
  getArticleOverviews(): Observable<any[]> {
    return this.http.get<any[]>(this.articlesUrl);
  }

  //  POST、PUT、DELETE
  postArticleOverviews(
    article: Articleoverviews
  ): Observable<Articleoverviews> {
    return this.http.post<Articleoverviews>(this.articlesUrl, article);
  }
  // postArticleOverviews(data: any): Observable<any> {
  //   return this.http.post<any>(this.Articleoverviews, data);
  // }

  putArticleOverviews(data: any): Observable<any> {
    return this.http.put<any>(this.articlesUrl, data);
  }

  removeArticleOverviews(id: number): Observable<any> {
    return this.http.delete<any>(`${this.articlesUrl}/${id}`);
  }

  getArticleOverviewsPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.articlesUrl}/GetPicture/${id}`, {
      responseType: 'blob',
    });
  }

  //取得文字資料Comments
  getComments(articleId: number): Observable<Comments[]> {
    return this.http
      .get<Comments[]>(`${this.CommentsUrl}?articleId=${articleId}`)
      .pipe(
        map((data) => {
          return data.map((item) => ({
            CommentContent: item.CommentContent,
            MemberPicture: item.MemberPicture
              ? `data:image/jpeg;base64,${item.MemberPicture}`
              : '', // 後端傳來blob格式需要+上'data:image/jpeg;base64,' 畫面才能顯示出來
            MemberName: item.MemberName,
            CommentDateTime: item.CommentDateTime,
            CommentId: item.CommentId,
          }));
        })
      );
  }

  //  POST、PUT、DELETE
  postComments(data: any): Observable<any> {
    return this.http.post<any>(this.CommentsUrl, data);
  }

  putComments(data: any): Observable<any> {
    return this.http.put<any>(this.CommentsUrl, data);
  }

  removeComments(id: number): Observable<any> {
    return this.http.delete<any>(`${this.CommentsUrl}/${id}`);
  }

  getCommentsPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.MemberInformationUrl}/GetPicture/${id}`, {
      responseType: 'blob',
    });
  }

  //取得文字資料BasicMemberInformation
  getBasicMemberInformation(): Observable<any[]> {
    return this.http.get<any[]>(this.MemberInformationUrl);
  }

  //  POST、PUT、DELETE
  postBasicMemberInformation(data: any): Observable<any> {
    return this.http.post<any>(this.MemberInformationUrl, data);
  }

  putBasicMemberInformation(data: any): Observable<any> {
    return this.http.put<any>(this.MemberInformationUrl, data);
  }

  removeBasicMemberInformation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.MemberInformationUrl}/${id}`);
  }

  getBasicMemberInformationPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.MemberPicture}/GetPicture/${id}`, {
      responseType: 'blob',
    });
  }

  getBasicMember(id: number): Observable<BasicMemberInformation> {
    return this.http.get<BasicMemberInformation>(
      `${this.MemberInformationUrl}/${id}`
    );
  }
  getArticlesList(): Observable<ArticlesList[]> {
    return this.http.get<ArticlesList[]>(this.articlesListUrl);
  }
}
