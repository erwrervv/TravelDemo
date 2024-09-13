import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = '/api/Auth/login';
  baseUserInfo: User = new User();
  constructor(private http: HttpClient) {
    const storedUserInfo = localStorage.getItem('BaseUserInfo');
    if (storedUserInfo) {
      this.baseUserInfo = JSON.parse(storedUserInfo) as User;
    }
  }

  login(userName: string, password: string) {
    return this.http.post<any>(this.authUrl, {
      userName: userName,
      password: password,
    });
  }
  setUser(info: User) {
    this.baseUserInfo = info;
    localStorage.setItem('BaseUserInfo', JSON.stringify(info));
  }
  getUser() {
    const userInfoStr = localStorage.getItem('BaseUserInfo');
    const userInfoProp = <User>JSON.parse(userInfoStr ?? '');
    this.baseUserInfo = userInfoProp;
    return this.baseUserInfo;
  }
}
