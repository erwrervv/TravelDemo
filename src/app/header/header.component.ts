import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../service/add-to-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //implements OnInit 加入上行
  // cartItemCount: number = 0;

  // constructor(private cartService: AddToCartService) {}

  // ngOnInit(): void {
  //   // 订阅购物车数量变化
  //   this.cartService.currentCartItemCount.subscribe(count => {
  //     this.cartItemCount = count;
  //   });
  // }

  cartCount: number = 0;


  constructor(private adcService: AddToCartService) { }

  ngOnInit() {
    this.adcService.getCartCount().subscribe(count => {
      this.cartCount = count; // 更新购物车数量
      console.log('Updated Cart Count:', this.cartCount); // 用於檢查




  })
}
}
