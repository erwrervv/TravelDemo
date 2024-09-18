import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { Router } from '@angular/router';
import { AddToCartService } from './../../service/add-to-cart.service';
import { ActivatedRoute } from '@angular/router';
import { DataproductService } from 'src/app/service/dataproduct.service';



SwiperCore.use([EffectFade, Autoplay]);


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],

})
export class ProductdetailComponent implements OnInit {
//api

constructor(private dProduct: DataproductService, private router: Router, private adcService: AddToCartService, private route: ActivatedRoute) { }


ngOnInit() {
  this.getProduct()

  //利用id創出cart/id=?得到新的cart網址作為購物車
  // this.route.paramMap.subscribe(params => {
  //   const id = Number(params.get('id'));

  //   // 根据 id 查找产品详情
  //   this.product = this.products.find(p => p.id === id);
  // });

  // this.route.paramMap.subscribe(params => {
  //   const id = Number(params.get('id'));
  //   this.product = this.products.find(p => p.id === id);
  
  // });
}


  


  value: number = 5;
  productId: number | null = null;
  product: any; // 用于存储产品详细信息
  productpic: any;
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


  

  // images = [
  //   { src: './assets/images/flower.png', alt: 'Slide 1' },
  //   { src: './assets/images/cactus2.png', alt: 'Slide 2' },
  //   { src: './assets/images/choco.png', alt: 'Slide 3' },
  //   { src: './assets/images/sun.png', alt: 'Slide 4' },
  //   { src: './assets/images/perfume.png', alt: 'Slide 5' },

  // ];

  //變數
  inputValue: number = 1;
  
  AddToCartService: any;
  isModalVisible: boolean = false;

  //讀取所有商品資料
  getProduct(){
    this.route.paramMap.subscribe(params => {
   const id = Number(params.get('id'));
   this.dProduct.getProductDetail(id).subscribe(data =>{
     console.log("data:",data)
     this.product = data
   })
 
 });
   }


  //   order={
  //     productID:1
  //     Qty:3
  //     price:1000
  //   }
  // createOrder(){
  //     this.dProduct.createOrder(order)
  //  }
  //放入input值
 
onQuantityBlur(product: any) {
  const value = product.inputValue;
  if (!isNaN(value) && value > 0) {
    let values: number[] = JSON.parse(localStorage.getItem('inputValue') || '[]');
    values.push(value);
    localStorage.setItem('inputValue', JSON.stringify(values)); // 存储为 JSON 数组
  }
}

navigateToDisplay() {
  this.router.navigate(['/cart']); // 导航到显示页面
  this.inputValue = 0; // 清空值（在本页面进行清空）

}


  //放入圖片
  //控制大圖小圖移動 使用swiper
  // public swiperConfigbig: SwiperOptions = {
  //   effect: 'fade',
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: { clickable: true },
  //   navigation: true,

  // };

  // public swiperConfig: SwiperOptions = {
  //   direction: 'horizontal', // 水平滚动
  //   slidesPerView: 5,        // 同时显示五张图片
  //   spaceBetween: 10,        // 图片之间的间距
  //   autoplay: {
  //     delay: 5000,           // 自动切换的时间间隔
  //     disableOnInteraction: false,
  //   },
  //   pagination: { clickable: true }, // 分页器
  //   navigation: true,        // 上下文箭头
  //   loop: true,              // 循环播放
  // };


  //加入購物車

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



//立即購買
  goToCart() {

    // this.router.navigate(['/cart'], { queryParams: { id: this.product?.id } });

    // let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    // cartItems.push(this.product);
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));  // 存储到 localStorage

    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push({
      name: this.product.MallProductName,  // 商品名称
      image: this.product.Pimage,          // 商品图片
      price: this.product.GoldAmount,      // 商品金额
      quantity: this.inputValue  //使用者輸入商品數量
    })
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    this.router.navigate(['/cart']);
   
  };



  //加入購物車

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
    // let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    // cartItems.push(this.product);  // 将当前产品添加到购物车
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));  // 存储到 localStorage


    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push({
      name: this.product.MallProductName,  // 商品名稱
      image: this.product.Pimage,          // 商品圖片
      price: this.product.GoldAmount,      // 商品金额
      quantity: this.inputValue ,  // 商品数量
    })
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // 3秒后关闭模态框并导航到购物车页面
    setTimeout(() => {
      this.isModalVisible = false;
      this.router.navigate(['/cart']);  // 导航到购物车页面
    }, 3000); // 3秒后关闭

  
    

  }




}
