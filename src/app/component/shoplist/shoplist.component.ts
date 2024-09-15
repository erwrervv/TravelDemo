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
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 2,
      image: 'assets/images/cactus2.png',
      title: '帥氣仙人掌_讓您外表英氣逼人',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 3,
      image: 'assets/images/whiteheels.png',
      title: '優雅白高跟_讓您成為閃耀的星',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 4,
      image: 'assets/images/rocket.png',
      title: '霸氣火箭_您是所有人的焦點',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 5,
      image: 'assets/images/perfume.png',
      title: '清新香氛_為生活增添一抹甜美',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 6,
      image: 'assets/images/sun.png',
      title: '元氣朝陽_讓每一天都充滿動力',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 7,
      image: 'assets/images/notebook.png',
      title: '輕巧筆記本_讓每個靈感都能隨手記下',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 8,
      image: 'assets/images/blanket.png',
      title: '溫暖毛毯_讓每個懶洋洋的午後都更舒服',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },

    {
      id: 9,
      image: 'assets/images/earrings.png',
      title: '時尚耳環_讓每個微笑都更閃亮',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 10,
      image: 'assets/images/choco.png',
      title: '繽紛巧克力_每一口都是驚奇',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 11,
      image: 'assets/images/headphone.png',
      title: '質感耳機_戴上的那一刻世界彷彿靜止',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },

  ];

  products2 = [
    {
      image: 'assets/images/cactus2.png',
      title: '帥氣仙人掌_讓您外表英氣逼人',
      price: '$23.00',
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
  ]

constructor(private router: Router){}
goToProductDetail(productId: number) {
  this.router.navigate(['/productdetail', productId]);
}
}
