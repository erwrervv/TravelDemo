import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {EffectFade, Autoplay } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  //商品圖片
  images = [
    { src: './assets/images/flower.png', alt: 'Slide 1' },
    { src: './assets/images/cactus2.png', alt: 'Slide 2' },
    { src: './assets/images/choco.png', alt: 'Slide 3' },
    { src: './assets/images/sun.png', alt: 'Slide 4' }
  ];

  //swiper效果
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


}
