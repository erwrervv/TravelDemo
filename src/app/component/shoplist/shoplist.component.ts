import { AddToCartService } from './../../service/add-to-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent {
   searchKeyword = ''
   products = [
    {
      id: 1,
      image: 'assets/images/flower.png',
      title: '美麗小花_讓您每日心情美麗',
      price: 100,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 43,
    },
    {
      id: 2,
      image: 'assets/images/cactus2.png',
      title: '帥氣仙人掌_讓您外表英氣逼人',
      price: 200,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 23,
    },
    {
      id: 3,
      image: 'assets/images/whiteheels.png',
      title: '優雅白高跟_讓您成為閃耀的星',
      price: 1500,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 120,
    },
    {
      id: 4,
      image: 'assets/images/rocket.png',
      title: '霸氣火箭_您是所有人的焦點',
      price: 3000,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 5,
    },
    {
      id: 5,
      image: 'assets/images/perfume.png',
      title: '清新香氛_為生活增添一抹甜美',
      price: 500,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 56,

    },
    {
      id: 6,
      image: 'assets/images/sun.png',
      title: '元氣朝陽_讓每一天都充滿動力',
      price: 50,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 1000,
    },
    {
      id: 7,
      image: 'assets/images/notebook.png',
      title: '輕巧筆記本_讓每個靈感都能隨手記下',
      price: 35,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 121,
    },
    {
      id: 8,
      image: 'assets/images/blanket.png',
      title: '溫暖毛毯_讓每個懶洋洋的午後都更舒服',
      price: 700,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 34,

    },

    {
      id: 9,
      image: 'assets/images/earrings.png',
      title: '時尚耳環_讓每個微笑都更閃亮',
      price: 1200,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 230,
    },
    {
      id: 10,
      image: 'assets/images/choco.png',
      title: '繽紛巧克力_每一口都是驚奇',
      price: 80,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 233,
    },
    {
      id: 11,
      image: 'assets/images/headphone.png',
      title: '質感耳機_戴上的那一刻世界彷彿靜止',
      price: 5000,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      selledquant: 7,
    },

  ];




constructor(private router: Router){}
goToProductDetail(productId: number) {
  this.router.navigate(['/productdetail', productId]);
}
}
