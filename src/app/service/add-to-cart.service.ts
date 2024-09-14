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



  //ver2

    // private cart: any[] = [];

    // constructor() { }

    // addToCart(product: any) {
    //   this.cart.push(product);
    //   console.log('Product added to cart:', product);
    // }

    // getCart() {
    //   return this.cart;
    // }




    //ver3

    private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0); // 使用 BehaviorSubject 来跟踪购物车数量

  constructor() { }

  addToCart(product: any) {
    this.cart.push(product);
    this.cartCount.next(this.cart.length); // 更新购物车数量
    console.log('Product added to cart:', product);
  }

  getCartCount() {
    return this.cartCount.asObservable(); // 使其可观察
  }
}
