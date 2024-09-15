import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService],
})
export class LoginComponent {
  userInfo: User = new User();

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    console.log('userInfo', this.authService.baseUserInfo);
  }

  onSubmit() {
    this.authService
      .login(this.userInfo.userName, this.userInfo.password)
      .subscribe({
        next: (response) => {
          this.userInfo.token = JSON.stringify(response.token); // 賦予token值
          this.userInfo.memberId = Number(JSON.stringify(response.memberId));
          this.authService.setUser(this.userInfo); //把user資訊寫入localStorage內
          localStorage.setItem('jwt', JSON.stringify(response.token)); //寫入localStorage內 KEY=token
          this.dataService.getBasicMember(
            this.userInfo.memberId
          ).subscribe(data=>{
            this.authService.setMember(data)
          })
          //跳轉頁面回首頁
          this.router.navigate(['/home']).then(()=>{
            alert('登入成功')
          })
        },
        error: () => {
          //以下為失敗處理方式
          alert('帳號或密碼錯誤');
          this.userInfo.userName = '';
          this.userInfo.password = ';';
        },
      });
  }
}
