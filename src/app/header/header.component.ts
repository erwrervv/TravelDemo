import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { BasicMemberInformation } from '../interfaces/basicMemberInformation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  memberData!: BasicMemberInformation | null;
  constructor(
    public router: Router,
    public authService: AuthService,
    private dataService: DataService
  ) {
    this.getMember();
  }
  ngOnInit(): void {
    this.getMember();
    this.authService.memberData$.subscribe(data=>{
      this.memberData=data
    })


  }
  loginUrl() {
    this.router.navigate(['/login']);
  }
  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('BaseUserInfo');
    window.location.reload();
  }
  getMember() {
    if (this.authService.baseUserInfo.memberId) {
      this.dataService
        .getBasicMember(this.authService.baseUserInfo.memberId)
        .subscribe((res) => {
          this.memberData = res;
        });
    }
  }
}
