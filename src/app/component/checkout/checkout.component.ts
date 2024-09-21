import { Component , OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { DataproductService } from 'src/app/service/dataproduct.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  TotalCalc: number =0;
  products: any[] = [];
  storedValues: number[] = [];

ngOnInit(): void {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.products = cartItems;
    

}


  cartItems = [
    { name: 'HERAN 風扇', price: 1480, quantity: 1, total: 1480 },
  ];

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

  placeOrder() {
    console.log('訂單已送出');
    // 在这里处理下订单逻辑
  }

}
