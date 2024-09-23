import { AddToCartService } from '../../service/add-to-cart.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SwiperOptions } from 'swiper';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { ActivatedRoute } from '@angular/router';
import { DataproductService } from 'src/app/service/dataproduct.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{



  // products = [
  //   {
  //     id: 1,
  //     image: 'assets/images/flower.png',
  //     title: '美麗小花_讓您每日心情美麗',
  //     price: 100,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 43,
  //   },
  //   {
  //     id: 2,
  //     image: 'assets/images/cactus2.png',
  //     title: '帥氣仙人掌_讓您外表英氣逼人',
  //     price: 200,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 23,
  //   },
  //   {
  //     id: 3,
  //     image: 'assets/images/whiteheels.png',
  //     title: '優雅白高跟_讓您成為閃耀的星',
  //     price: 1500,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 120,
  //   },
  //   {
  //     id: 4,
  //     image: 'assets/images/rocket.png',
  //     title: '霸氣火箭_您是所有人的焦點',
  //     price: 3000,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 5,
  //   },
  //   {
  //     id: 5,
  //     image: 'assets/images/perfume.png',
  //     title: '清新香氛_為生活增添一抹甜美',
  //     price: 500,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 56,

  //   },
  //   {
  //     id: 6,
  //     image: 'assets/images/sun.png',
  //     title: '元氣朝陽_讓每一天都充滿動力',
  //     price: 50,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 1000,
  //   },
  //   {
  //     id: 7,
  //     image: 'assets/images/notebook.png',
  //     title: '輕巧筆記本_讓每個靈感都能隨手記下',
  //     price: 35,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 121,
  //   },
  //   {
  //     id: 8,
  //     image: 'assets/images/blanket.png',
  //     title: '溫暖毛毯_讓每個懶洋洋的午後都更舒服',
  //     price: 700,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 34,

  //   },

  //   {
  //     id: 9,
  //     image: 'assets/images/earrings.png',
  //     title: '時尚耳環_讓每個微笑都更閃亮',
  //     price: 1200,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 230,
  //   },
  //   {
  //     id: 10,
  //     image: 'assets/images/choco.png',
  //     title: '繽紛巧克力_每一口都是驚奇',
  //     price: 80,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 233,
  //   },
  //   {
  //     id: 11,
  //     image: 'assets/images/headphone.png',
  //     title: '質感耳機_戴上的那一刻世界彷彿靜止',
  //     price: 5000,
  //     productdetailUrl: 'productdetail',
  //     productUrl: 'single-product.html',
  //     selledquant: 7,
  //   },

  // ];

  //變數區
  storedValues: number [] = [];
  AddToCartService: any;
  products: any[] = []; // 用于存储购物车中的商品
  cartCount: number = 0;
  TotalCalc :number = 0;


  constructor(private route: ActivatedRoute, private router: Router, private adcService: AddToCartService) { }
  ngOnInit(): void {
    // 获取路由参数中的 id
    // this.route.queryParamMap.subscribe(params => {
    //   const id = Number(params.get('id'));
    //   // 根据 id 查找对应的商品
    //   const product = this.products.find(p => p.id === id);
    //   if (product) {
    //     this.products = [product];
    //   }
    // });


    //透過local storage找到cartItems
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.products = cartItems;
    // 確定cartCount隨時更新
    this.adcService.getCartCount().subscribe((count) => {
      this.cartCount = count;


    });



    //取local storage剛剛在
    console.log('Cart Items:', this.products);
    console.log('Cart Count:', this.cartCount); // 可用來檢查




    // const storedString  = localStorage.getItem('inputValue');
    // if (storedString) {
    //   this.storedValues = JSON.parse(storedString); // 解析为数字数组
    //   localStorage.removeItem('inputValue'); // 清除 localStorage 中的值

    // }

    this.updateTotalPrice();


  }






  // 使用者輸入框 這個是可以用的
  onQuantityBlur(product: { quantity: number; }) {

    if (product.quantity < 1 || isNaN(product.quantity)) {
      alert('商品結帳需為一件以上');
      product.quantity = 1; // 自动修正为空或小于 1 的情况
    }
      if (product.quantity > 10) {
        alert('一次最多只能選擇10件商品!');
        product.quantity = 10; // 自动修正为 10
      }
      this.saveCartToLocalStorage();

      // 更新总金额
      this.updateTotalPrice();

  }

  //使用者輸入框 這個是測試用


  //增加紐 防呆
  increaseQuantity(product: { quantity: number; }) {

    if (product.quantity >= 10) {
      alert('一次最多只能選擇10件商品!');
      product.quantity = 10;
    } else {
      // 允许增加数量
      product.quantity++;
    }


    this.saveCartToLocalStorage();
    this.TotalCalc = this.calculateTotalPrice();
  }
  //減少紐 防呆
  decreaseQuantity(product: { quantity: number; }) {
    if (product.quantity > 1) {
      product.quantity--;
    }
    else {
      alert('商品結帳需為一件以上!')
      product.quantity = 1;
    }

    this.saveCartToLocalStorage();
    this.TotalCalc = this.calculateTotalPrice();
  }

  //清除並儲存local storage
  removeProduct(product: { quantity: number; }) {
    this.products = this.products.filter(p => p !== product);
    this.adcService.cartItems = this.products;



    // 更新購物車数量
    this.adcService.cartCount.next(this.adcService.cartItems.length);



    // 更新localStorage中的購物車状态
    localStorage.setItem('cartItems', JSON.stringify(this.adcService.cartItems));

    //保存更新到local storage
    this.saveCartToLocalStorage();
    //更新總價
    this.updateTotalPrice();

    //測試用文字
    console.log('Removed product:', product);
    console.log('Updated cart items:', this.products);
    console.log('Updated cart count:', this.adcService.cartCount.value);



  }
  //計算價格
  calculateTotalPrice() {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);

  }

  checkout() {
    this.router.navigate(['/checkout']);
    console.log('cartItems:', this.products)
  }

  //把更新存進去local storage
  saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.products));
  }


  updateTotalPrice() {
    this.TotalCalc = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }


  // 当数量变更时更新总金额
  onQuantityChange() {

    this.updateTotalPrice(); // 每次数量变化时重新计算总金额

  }

}




