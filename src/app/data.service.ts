import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';
import { BasicMemberInformation } from 'src/app/interfaces/basicMemberInformation';
import { Comments } from 'src/app/interfaces/comments';
import { ArticlesList, ArticlesListPost } from './interfaces/articles-list';
import { PagedResult, pageinfo } from './interfaces/pageInfo';

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

  putArticleOverviews(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.articlesUrl}/${id}`, data);
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
              ? `data:image/png;base64,${item.MemberPicture}`
              : '', // 後端傳來blob格式需要+上'data:image/jpeg;base64,' 畫面才能顯示出來
            MemberName: item.MemberName,
            CommentDateTime: item.CommentDateTime,
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

  //ArticlesList GET POST

  getArticlesList(): Observable<ArticlesList[]> {
    return this.http.get<ArticlesList[]>(this.articlesListUrl);
  }
  postArticleList(data:ArticlesListPost): Observable<ArticlesListPost>{
    return this.http.post<ArticlesListPost>(this.articlesListUrl,data)
  }
  putArticleList(id:number,data:ArticlesListPost): Observable<ArticlesListPost>{
    return this.http.post<ArticlesListPost>(`data${this.articlesListUrl}/${id}`,data)
  }
  getArticlesPaged(Page: pageinfo) {
    let params = new HttpParams();
    params = params.append('PageSize', Page.PageSize);
    params = params.append('PageNumber', Page.PageNumber);
    if (Page.SearchKeyword)
      params = params.append('SearchKeyword', Page.SearchKeyword);
    if (Page.SearchTagName)
      params = params.append('SearchTagName', Page.SearchTagName);
    return this.http.get<PagedResult<Articleoverviews>>(
      `${this.articlesUrl}/GetPaged`,
      { params: params }
    );
  }
}
