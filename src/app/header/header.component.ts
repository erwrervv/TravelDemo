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
  memberData:BasicMemberInformation | undefined;
  constructor(
    public rou: Router,
    public authService: AuthService,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.getMember();
    console.log('memberData',this.memberData);

  }
  loginUrl() {
    this.rou.navigate(['/login']);
  }
  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('BaseUserInfo');
    window.location.reload();
  }
  getMember() {
    this.dataService
      .getBasicMember(this.authService.baseUserInfo.memberId)
      .subscribe((res) => {
        this.memberData=res;

      });
  }
}
