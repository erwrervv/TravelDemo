import { AddToCartService } from '../../service/add-to-cart.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SwiperOptions } from 'swiper';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{



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

  //變數區
  storedValues: number [] = [];
  AddToCartService: any;
  quantity: number = 1;


  constructor(private route: ActivatedRoute) { }
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

    //取local storage剛剛在


    const storedString  = localStorage.getItem('inputValues');
    if (storedString) {
      this.storedValues = JSON.parse(storedString); // 解析为数字数组
      localStorage.removeItem('inputValues'); // 清除 localStorage 中的值


    }
  }





  // 使用者輸入框 這個是可以用的
  onQuantityBlur(product: { selledquant: number; }) {
    if (product.selledquant > 10) {
      alert('一次最多只能選擇10件商品!');
      product.selledquant = 10; // 限制最多选择 10 件
    } else if (product.selledquant < 1) {
      product.selledquant = 1; // 确保数量不能小于 1
    }

    this.saveCartToLocalStorage();


  }

  //使用者輸入框 這個是測試用


  //增加紐 防呆
  increaseQuantity(product: { selledquant: number; }) {

    if (product.selledquant >= 10) {
      alert('一次最多只能選擇10件商品!');
      product.selledquant = 10;
    } else {
      // 允许增加数量
      product.selledquant++;
    }

    this.saveCartToLocalStorage();
  }
  //減少紐 防呆
  decreaseQuantity(product: { selledquant: number; }) {
    if (product.selledquant > 1) {
      product.selledquant--;
    }
    else {
      alert('最低數量不可小於1!')
    }

    this.saveCartToLocalStorage();
  }

  //清除並儲存local storage
  removeProduct(product: { selledquant: number; }) {
    this.products = this.products.filter(p => p !== product);

    this.saveCartToLocalStorage();
  }

  //計算價格
  calculateTotalPrice() {
    return this.products.reduce((total, product) => total + (product.price * product.selledquant), 0);
  }

  checkout() {
    alert('買單測試')
  }

  //把更新存進去local storage
  saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.products));
  }



}




