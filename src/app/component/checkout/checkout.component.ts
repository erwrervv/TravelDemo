import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { DataproductService } from 'src/app/service/dataproduct.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  TotalCalc: number = 0;
  products: any[] = [];
  storedValues: number[] = [];

  //填寫資訊
  MemberName: string = '';
  Address: string = '';
  MemberPhone: string = '';
  Shoporderid: string = '';

  constructor(private http: HttpClient, private dPService: DataproductService) { }

  ngOnInit(): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.products = cartItems;


  }


  cartItems = [
    { name: 'HERAN 風扇', price: 1480, quantity: 1, total: 1480 },
  ];


  // 模拟提交订单
  placeOrder() {
    // 创建一个对象来存储订单的所有信息
    const orderData = {
      MemberName: this.MemberName,
      Address: this.Address,
      MemberPhone: this.MemberPhone,
      Shoporderid: this.Shoporderid,
      TotalPrice: this.calculateTotalPrice()
    };
    console.log('訂單資料:', orderData);

    // 通过 POST 方法将订单数据发送到 API
    this.dPService.createOrder(orderData)
    .subscribe(
      response => {
        console.log('訂單成功提交', response);
        // 你可以在这里执行清空购物车或跳转页面等操作
      },
      error => {
        console.error('訂單發生錯誤', error);
      }
    );


  }


  calculateTotalPrice() {
    let totalPrice = 0;
    this.products.forEach(product => {
      // 計算商品總價並添加到迴圈中
      product.TotalPrice = product.price * product.quantity;
      // 對各商品總價累加
      totalPrice += product.TotalPrice;
    });
    return totalPrice; // 此為最後總金額
  }




}
