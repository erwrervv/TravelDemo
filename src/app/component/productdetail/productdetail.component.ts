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
  templateUrl: './productdetail.component.html' ,
  styleUrls: ['./productdetail.component.css'],

})
export class ProductdetailComponent implements OnInit {
//api


//商品寫死資料
products = [
  {
    id: 1,
    image: 'assets/images/flower.png',
    title: '美麗小花_讓您每日心情美麗',
    price: 100,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '休閒',
    selledquant: 43,
  },
  {
    id: 2,
    image: 'assets/images/cactus2.png',
    title: '帥氣仙人掌_讓您外表英氣逼人',
    price: 500,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '休閒',
    selledquant: 23,
  },
  {
    id: 3,
    image: 'assets/images/racecar2.png',
    title: '酷炫賽車_讓您在外走路都有風',
    price: 1000,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '有型',
    selledquant: 120,
  },
  {
    id: 4,
    image: 'assets/images/whiteheels.png',
    title: '優雅白高跟_讓您成為閃耀的星',
    price: 2000,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '美感',
    selledquant: 110,
  },
  {
    id: 5,
    image: 'assets/images/rocket.png',
    title: '霸氣火箭_您是所有人的焦點',
    price: 10000,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '有型',
    selledquant: 5,
  },
  {
    id: 6,
    image: 'assets/images/perfume.png',
    title: '清新香氛_為生活增添一抹甜美',
    price: 888,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '美感',
    selledquant: 56,

  },
  {
    id: 7,
    image: 'assets/images/sun.png',
    title: '元氣朝陽_讓每一天都充滿動力',
    price: 250,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '休閒',
    selledquant: 1000,
  },
  {
    id: 8,
    image: 'assets/images/notebook.png',
    title: '輕巧筆記本_讓每個靈感都能隨手記下',
    price: 150,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '日常',
    selledquant: 121,
  },
  {
    id: 9,
    image: 'assets/images/blanket.png',
    title: '溫暖毛毯_讓每個懶洋洋的午後都更舒服',
    price: 3000,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '日常',
    selledquant: 34,

  },

  {
    id: 10,
    image: 'assets/images/earrings.png',
    title: '時尚耳環_讓每個微笑都更閃亮',
    price: 666,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '美感',
    selledquant: 230,
  },
  {
    id: 11,
    image: 'assets/images/choco.png',
    title: '繽紛巧克力_每一口都是驚奇',
    price: 200,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '實用',
    selledquant: 233,
  },
  {
    id: 12,
    image: 'assets/images/headphone.png',
    title: '質感耳機_戴上的那一刻世界彷彿靜止',
    price: 8888,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '有型',
    selledquant: 7,
  },
  {
    id: 13,
    image: 'assets/images/perfume2.png',
    title: '一絲清香_為生活增添情趣',
    price: 5000,
    productdetailUrl: 'productdetail',
    productUrl: 'single-product.html',
    productCategory: '美感',
    selledquant: 83,
  },


];


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
  selectedProductId: number = 10;
  selectedProduct: any;

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

      //這行為透過api專案讀取data的id轉為loaddata 也就是products[]需要的id

     this.loadProductData(this.product.MallProductTableId)
   })

 });
   }

   loadProductData(productId: number): void {
    this.selectedProduct = this.products.find(p => p.id === productId);
    if (!this.selectedProduct) {
      console.log('Product not found in local data');
    }
  }

  selectProductById(id: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      this.selectedProductId = product.id; // 你可以根据需要保存其他信息
    } else {
      console.log('Product not found');
    }
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

  onInputChange(value :any) {
    const parsedValue = parseInt(value, 10);


    if (isNaN(parsedValue) || parsedValue < 1 ||parsedValue>10) {
      alert('輸入格式不符/商品數應為1至10件')

      this.inputValue = 1; // 自動重置為1

    }
    else {
      this.inputValue = Math.min(parsedValue, 10); // 確保不超過10

    }
    console.log('parseValue=:' ,parsedValue)
    console.log('inputValue=:' ,this.inputValue)

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
      if(this.inputValue >10){

          alert('一次最多只能選擇10件商品!');
          this.inputValue = 10;
        }
        if(this.inputValue < 1 ){

          alert('商品結帳需為一件以上!');
          this.inputValue = 10;
        }

      }


    }


    decreaseQuantity() {
      if (this.inputValue > 1) {
        this.inputValue--;
        if(this.inputValue >10){

          alert('一次最多只能選擇10件商品!');
          this.inputValue = 10;
        }
        if(this.inputValue < 1 ){

          alert('商品結帳需為一件以上!');
          this.inputValue = 10;
        }


      }

    }



//立即購買
goToCart() {

  // this.router.navigate(['/cart'], { queryParams: { id: this.product?.id } });

  // let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  // cartItems.push(this.product);
  // localStorage.setItem('cartItems', JSON.stringify(cartItems));  // 存储到 localStorage

  this.adcService.addToicon({
    id: this.product.MallProductTableId,
    name: this.product.MallProductName,  // 商品名稱
    image: this.product.Pimage,          // 商品圖片
    price: this.product.GoldAmount,      // 商品金额
    quantity: this.inputValue ,  // 商品数量
  })

  this.router.navigate(['/cart']);
  console.log('MallProductTableID',this.product.MallProductTableId)


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


    // let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    // cartItems.push({
      this.adcService.addToicon({
      id: this.product.MallProductTableId,
      name: this.product.MallProductName,  // 商品名稱
      image: this.product.Pimage,          // 商品圖片
      price: this.product.GoldAmount,      // 商品金额
      quantity: this.inputValue ,  // 商品数量
    })
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));



    // 3秒后关闭模态框并导航到购物车页面
    setTimeout(() => {
      this.isModalVisible = false;
      this.router.navigate(['/productdetail', this.productId]);  // 导航到购物车页面
    }, 3000); // 3秒后关闭





  }





}
