import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  config: any = {
    spaceBetween: 50,
    slidesPerView: 1,
    loop: true,
    pagination: { clickable: true },
    navigation: true,
  };
}
