import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { BasicMemberInformation } from '../interfaces/basicMemberInformation';
import { AddToCartService } from '../service/add-to-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  memberData!: BasicMemberInformation | null;
  cartCount: number = 0;



  constructor(
    public router: Router,
    public authService: AuthService,
    private dataService: DataService,
    private adcService: AddToCartService
  ) {
    this.getMember();
  }
  ngOnInit(): void {
    this.getMember();
    this.authService.memberData$.subscribe(data => {
      this.memberData = data
    })
    this.adcService.getCartCount().subscribe(count => {
      this.cartCount = count; // 更新购物车数量


    });

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
  gotoArticlePost() {
    this.router.navigate(["/article-post"]).then(() => {
      window.scrollTo(0, 0);
    })
  }

  gotoArticleListPost() {
    this.router.navigate(["/article-list-post"]).then(() => {
      window.scrollTo(0, 0);
    })
    //implements OnInit 加入上行
    // cartItemCount: number = 0;

    // constructor(private cartService: AddToCartService) {}

    // ngOnInit(): void {
    //   // 订阅购物车数量变化
    //   this.cartService.currentCartItemCount.subscribe(count => {
    //     this.cartItemCount = count;
    //   });
    // }

  }
}
