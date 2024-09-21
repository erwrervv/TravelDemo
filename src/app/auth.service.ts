import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './interfaces/user';
import { BasicMemberInformation } from './interfaces/basicMemberInformation';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = '/api/Auth/login';
  private memberDataSubject =
    new BehaviorSubject<BasicMemberInformation | null>(null); //允許傳入值
  memberData$ = this.memberDataSubject.asObservable(); //(被觀察者)會接收subject的值 (外部訂閱取值)
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
  setMember(member: BasicMemberInformation) {
    this.memberDataSubject.next(member);
  }
}
