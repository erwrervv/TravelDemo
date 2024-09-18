import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(

  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("jwt")
    if(token){
      request=request.clone({
        //每次發送的請求 header中會寫入 身分驗證 Bearer token
        headers:request.headers.set("Authorization","bearer "+token)
      })
    }
    return next.handle(request);
  }
}
