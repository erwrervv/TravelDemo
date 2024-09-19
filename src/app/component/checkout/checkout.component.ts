import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {


  cartItems = [
    { name: 'HERAN 風扇', price: 1480, quantity: 1, total: 1480 },
  ];
  
  calculateTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.total, 0);
  }
  
  placeOrder() {
    console.log('訂單已送出');
    // 在这里处理下订单逻辑
  }
  
}
