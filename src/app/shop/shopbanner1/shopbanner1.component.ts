import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shopbanner1',
  templateUrl: './shopbanner1.component.html',
  styleUrls: ['./shopbanner1.component.css']
})
export class Shopbanner1Component {
  bannerTitle: string = '購物';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.updateBannerTitle(currentRoute);
    });
  }

updateBannerTitle(route: string) {
  if (route.includes('orderpage')) {
    this.bannerTitle = '訂單';
  } else if (route.includes('productdetail')) {
    this.bannerTitle = '商品明細';
  } else if (route.includes('shoplist')) {
    this.bannerTitle = '商品列表';
  } else if (route.includes('checkout')) {
    this.bannerTitle = '結帳';
  } else if (route.includes('cart')) {
    this.bannerTitle = '購物車';
  } else {
    this.bannerTitle = '購物';
  }


}
}
