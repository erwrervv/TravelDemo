import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articleoverviews } from './interfaces/articleoverview';
import { Comments } from './interfaces/comments';
import { BasicMemberInformation } from './interfaces/basicMemberInformation';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Articleoverviews = 'https://localhost:7003/api/ArticleOverviews';
  private Comments = 'https://localhost:7003/api/Comments';
  private MemberInformationUrl = 'https://localhost:7003/api/BasicMemberInformations';

  MemberPicture: any;
  constructor(private http: HttpClient) { }
  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.Articleoverviews}/${id}`);
  }
  //取得文字資料Articleoverviews
  getArticleOverviews(): Observable<any[]> {
    return this.http.get<any[]>(this.Articleoverviews);
  }

  //  POST、PUT、DELETE
  postArticleOverviews(data: any): Observable<any> {
    return this.http.post<any>(this.Articleoverviews, data);
  }

  putArticleOverviews(data: any): Observable<any> {
    return this.http.put<any>(this.Articleoverviews, data);
  }

  removeArticleOverviews(id: number): Observable<any> {
    return this.http.delete<any>(`${this.Articleoverviews}/${id}`);
  }

  getArticleOverviewsPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.Articleoverviews}/GetPicture/${id}`, { responseType: 'blob' });
  }


  //取得文字資料Comments
  getComment(): Observable<any[]> {
    return this.http.get<any[]>(this.Comments);
  }

  //  POST、PUT、DELETE
  postComments(data: any): Observable<any> {
    return this.http.post<any>(this.Comments, data);
  }

  putComments(data: any): Observable<any> {
    return this.http.put<any>(this.Comments, data);
  }

  removeComments(id: number): Observable<any> {
    return this.http.delete<any>(`${this.Comments}/${id}`);
  }

  getCommentsPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.MemberPicture}/GetPicture/${id}`, { responseType: 'blob' });
  }

  //取得文字資料BasicMemberInformation
  getBasicMemberInformation(): Observable<any[]> {
    return this.http.get<any[]>(this.Comments);
  }

  //  POST、PUT、DELETE
  postBasicMemberInformation(data: any): Observable<any> {
    return this.http.post<any>(this.Comments, data);
  }

  putBasicMemberInformation(data: any): Observable<any> {
    return this.http.put<any>(this.Comments, data);
  }

  removeBasicMemberInformation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.Comments}/${id}`);
  }

  getBasicMemberInformationPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.MemberPicture}/GetPicture/${id}`, { responseType: 'blob' });
  }
}
