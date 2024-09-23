import { Component , OnInit} from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { DataproductService } from 'src/app/service/dataproduct.service';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/service/add-to-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  TotalCalc: number = 0;
  products: any[] = [];
  storedValues: number[] = [];

  //填寫資訊
  MemberName: string = '';
  Address: string = '';
  MemberPhone: string = '';
  Shoporderid: string = '';

  constructor(private http: HttpClient, private dPService: DataproductService, private router: Router, private adcService: AddToCartService) { }

  ngOnInit(): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.products = cartItems;


  }

  
    // 
    placeOrder() {


      //先驗證
      if (!this.MemberName || !this.Address || !this.MemberPhone) {
        alert('收件人姓名、地址和電話號碼為必填');
        return; // 停止後續執行
      }


      // 創一個變數儲存訂單的所有欄位
      const orderData = {
        MemberName: this.MemberName,
        Address: this.Address,
        MemberPhone: this.MemberPhone,
        Shoporderid: this.Shoporderid,
        TotalPrice: this.calculateTotalPrice()
      };
      console.log('訂單資料:', orderData);

      // 用 POST 方法把訂單資料傳給api
      this.dPService.createOrder(orderData)
        .subscribe(
          response => {
            alert('商品已成功完成下訂')
            console.log('訂單成功提交', response);
            //清掉購物車
            this.adcService.clearCart();

              this.router.navigate(['/orderpage']);

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


