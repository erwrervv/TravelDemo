import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {EffectFade, Autoplay } from 'swiper';

SwiperCore.use([ EffectFade, Autoplay]);

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

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
