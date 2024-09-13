import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {EffectFade, Autoplay } from 'swiper';
import { Router } from '@angular/router';



SwiperCore.use([ EffectFade, Autoplay]);


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html' ,
  styleUrls: ['./productdetail.component.css'],
  
})
export class ProductdetailComponent {


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

constructor(private router: Router) {}

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



}
