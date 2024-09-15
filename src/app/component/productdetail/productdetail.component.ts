import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { Router } from '@angular/router';
import { AddToCartService } from './../../service/add-to-cart.service';
import { ActivatedRoute } from '@angular/router'



SwiperCore.use([EffectFade, Autoplay]);


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],

})
export class ProductdetailComponent implements OnInit {
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

  images = [
    { src: './assets/images/flower.png', alt: 'Slide 1' },
    { src: './assets/images/cactus2.png', alt: 'Slide 2' },
    { src: './assets/images/choco.png', alt: 'Slide 3' },
    { src: './assets/images/sun.png', alt: 'Slide 4' },
    { src: './assets/images/perfume.png', alt: 'Slide 5' },

  ];

  //變數
  inputValue: number = 1;
  quantity: number = 1;
  AddToCartService: any;
  isModalVisible: boolean = false;

  //放入input值
 
onQuantityBlur(product: any) {
  const value = product.selledquant;
  if (!isNaN(value) && value > 0) {
    let values: number[] = JSON.parse(localStorage.getItem('inputValues') || '[]');
    values.push(value);
    localStorage.setItem('inputValues', JSON.stringify(values)); // 存储为 JSON 数组
  }
}

navigateToDisplay() {
  this.router.navigate(['/cart']); // 导航到显示页面
  this.inputValue = 0; // 清空值（在本页面进行清空）

}


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

  constructor(private router: Router, private adcService: AddToCartService, private route: ActivatedRoute) { }


  ngOnInit() {

    //利用id創出cart/id=?得到新的cart網址作為購物車
    // this.route.paramMap.subscribe(params => {
    //   const id = Number(params.get('id'));

    //   // 根据 id 查找产品详情
    //   this.product = this.products.find(p => p.id === id);
    // });

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.products.find(p => p.id === id);
    });
  }



  increaseQuantity() {
    if (this.inputValue < 100) {
      this.inputValue++;


    }
  }

  decreaseQuantity() {
    if (this.inputValue > 1) {
      this.inputValue--;

    }

  }




  goToCart() {

    // this.router.navigate(['/cart'], { queryParams: { id: this.product?.id } });

    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(this.product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));  // 存储到 localStorage

    this.router.navigate(['/cart']);
  }



  addToCart() {

    //第一個方法
    //   console.log('Product added to cart:', product);

    //   this.isModalVisible = true;
    //   this.adcService.addToCart(product);
    //   setTimeout(() => {
    //     this.isModalVisible = false;

    //     // 传递单个商品对象
    //     this.router.navigate(['/cart'], { queryParams: { id: this.product?.id } });
    //   }, 3000); // 3秒后关闭
    // }



    this.isModalVisible = true;

    // 使用 localStorage 存储商品到购物车
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(this.product);  // 将当前产品添加到购物车
    localStorage.setItem('cartItems', JSON.stringify(cartItems));  // 存储到 localStorage

    // 3秒后关闭模态框并导航到购物车页面
    setTimeout(() => {
      this.isModalVisible = false;
      this.router.navigate(['/cart']);  // 导航到购物车页面
    }, 3000); // 3秒后关闭

  }




}
