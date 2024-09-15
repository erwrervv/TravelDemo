import { Component , OnInit} from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {EffectFade, Autoplay } from 'swiper';
import { Router } from '@angular/router';
import { AddToCartService } from './../../service/add-to-cart.service';
import { ActivatedRoute } from '@angular/router';



SwiperCore.use([ EffectFade, Autoplay]);


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html' ,
  styleUrls: ['./productdetail.component.css'],

})
export class ProductdetailComponent implements OnInit{
  value: number = 5;
  productId: number | null = null;
  product: any; // 用于存储产品详细信息

 //手動切換
  // config: any = {
  //   spaceBetween: 50,
  //   slidesPerView: 1,
  //   loop: true,
  //   pagination: { clickable: true },
  //   navigation: true,
  // };

  //左右切換
  // public swiperConfig: SwiperOptions = {
  //   spaceBetween: 50,
  //   slidesPerView: 1,
  //   pagination: { clickable: true },
  //   navigation: true,
  //   autoplay: {
  //     delay: 5000, // 自动切换的时间间隔，单位为毫秒
  //     disableOnInteraction: false, // 用户交互时是否禁用自动播放
  //   },
  // };


    products = [
    {
      id: 1,
      image: 'assets/images/flower.png',
      title: '美麗小花_讓您每日心情美麗',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 2,
      image: 'assets/images/cactus2.png',
      title: '帥氣仙人掌_讓您外表英氣逼人',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 3,
      image: 'assets/images/whiteheels.png',
      title: '優雅白高跟_讓您成為閃耀的星',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 4,
      image: 'assets/images/rocket.png',
      title: '霸氣火箭_您是所有人的焦點',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 5,
      image: 'assets/images/perfume.png',
      title: '清新香氛_為生活增添一抹甜美',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 6,
      image: 'assets/images/sun.png',
      title: '元氣朝陽_讓每一天都充滿動力',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 7,
      image: 'assets/images/notebook.png',
      title: '輕巧筆記本_讓每個靈感都能隨手記下',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 8,
      image: 'assets/images/blanket.png',
      title: '溫暖毛毯_讓每個懶洋洋的午後都更舒服',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },

    {
      id: 9,
      image: 'assets/images/earrings.png',
      title: '時尚耳環_讓每個微笑都更閃亮',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 10,
      image: 'assets/images/choco.png',
      title: '繽紛巧克力_每一口都是驚奇',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },
    {
      id: 11,
      image: 'assets/images/headphone.png',
      title: '質感耳機_戴上的那一刻世界彷彿靜止',
      price: 23,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html'
    },

  ];




  images = [
    { src: './assets/images/flower.png', alt: 'Slide 1' },
    { src: './assets/images/cactus2.png', alt: 'Slide 2' },
    { src: './assets/images/choco.png', alt: 'Slide 3' },
    { src: './assets/images/sun.png', alt: 'Slide 4' }
  ];
  //放入圖片
  //控制大圖小圖移動 使用swiper
  public swiperConfigbig: SwiperOptions = {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
    navigation: true,

};

public swiperConfig: SwiperOptions = {
  direction: 'horizontal', // 水平滚动
  slidesPerView: 5,        // 同时显示五张图片
  spaceBetween: 10,        // 图片之间的间距
  autoplay: {
    delay: 5000,           // 自动切换的时间间隔
    disableOnInteraction: false,
  },
  pagination: { clickable: true }, // 分页器
  navigation: true,        // 上下文箭头
  loop: true,              // 循环播放
};


//加入購物車
quantity: number = 1;
  AddToCartService: any;
  isModalVisible: boolean = false;



constructor(private router: Router,private adcService: AddToCartService, private route: ActivatedRoute ) {}


ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.productId = Number(params.get('id'));

    // 根据 id 查找产品详情
    this.product = this.products.find(p => p.id === this.productId);
  });
}
increaseQuantity() {
  if (this.quantity < 100) {
    this.quantity++;
  }
}

decreaseQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

goToCart() {
  this.router.navigate(['/cart']);
}

addToCart(product: any) {

  console.log('Product added to cart:', product);

  this.isModalVisible = true;
  this.adcService.addToCart(product);
  setTimeout(() => {
    this.isModalVisible = false;

   // 传递单个商品对象
  this.router.navigate(['/cart']);
}, 3000); // 3秒后关闭
}


}
