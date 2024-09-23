import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  //測試用
  // private cartItemCount = new BehaviorSubject<number>(0); // 初始化购物车数量为 0

  // // 购物车数量的可观察对象
  // currentCartItemCount = this.cartItemCount.asObservable();

  // constructor() {}

  // // 更新购物车的商品数量
  // updateCartItemCount(count: number) {
  //   this.cartItemCount.next(count); // 更新购物车数量
  // }

  // // 获取当前购物车的商品数量
  // getCartItemCount() {
  //   return this.cartItemCount.value;
  // }

  // // 添加商品到购物车
  // addToCart() {
  //   let currentCount = this.getCartItemCount();
  //   this.updateCartItemCount(currentCount + 1); // 每次调用时购物车商品数量加1
  // }



  // ver3 讓購物車右上角有一個數字

  cartItems: any[] =JSON.parse(localStorage.getItem('cartItems') || '[]');;
  cartCount = new BehaviorSubject<number>(this.cartItems.length); // 使用 BehaviorSubject 来跟踪购物车数量

  constructor() { }
  addToicon(product: any) {

    this.cartItems.push(product);

    this.cartCount.next(this.cartItems.length); // 更新购物车数量
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log('Product added to cart:', this.cartItems);
  }


  getCartCount() {
    return this.cartCount.asObservable(); // 使其可观察
  }
  getCartItems() {
    return this.cartItems; // 獲取購物車內的產品
  }
  clearCart() {
    this.cartItems = [];
    this.cartCount.next(0); // 重置购物车数量
    localStorage.removeItem('cartItems'); // 清空localStorage
  }



}

