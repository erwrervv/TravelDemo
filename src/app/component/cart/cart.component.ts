import { AddToCartService } from '../../service/add-to-cart.service';
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { SwiperOptions } from 'swiper';
import SwiperCore, {EffectFade, Autoplay } from 'swiper';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  productcart = [
    {
      image: 'assets/images/flower.png',
      name: '美麗小花_讓您每日心情美麗',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      quantity: 1
    },
    {
      image: 'assets/images/cactus2.png',
      name: '帥氣仙人掌_讓您外表英氣逼人',
      price: 30,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      quantity: 1
    },
  ];
  AddToCartService: any;


    // 使用者輸入框
    onQuantityBlur(product: { quantity: number; }) {
    if (product.quantity > 10) {
      alert('一次最多只能選擇10件商品!');
      product.quantity = 10; // 限制最多选择 10 件
    } else if (product.quantity < 1) {
      product.quantity = 1; // 确保数量不能小于 1
    }


  }

    //增加紐
    increaseQuantity(product: { quantity: number; }) {
      product.quantity++;
    }

    decreaseQuantity(product: { quantity: number; }) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    }

    removeProduct(product: any) {
      this.productcart = this.productcart.filter(p => p !== product);
    }

    calculateTotalPrice() {
      return this.productcart.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    checkout() {
    alert('買單測試')
    }


  //   addToCart() {
  //     this.AddToCartService.addToCart(); // 更新购物车数量
  // }

}




