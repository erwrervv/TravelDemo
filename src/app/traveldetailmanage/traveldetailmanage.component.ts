import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traveldetailmanage',
  templateUrl: './traveldetailmanage.component.html',
  styleUrls: ['./traveldetailmanage.component.css']
})
export class TraveldetailmanageComponent {
  cartItems = [
    {
      destination: '基隆景點正濱漁港二日遊',
      travelDate: '2024年10月1日',
      numberOfPeople: 2,
      price: 12000,
      purchased: false
    },
    {
      destination: '基隆景點八斗子觀光漁港',
      travelDate: '2024年10月5日',
      numberOfPeople: 4,
      price: 15000,
      purchased: false
    }
  ];

  // 删除商品
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  // 购买商品
  purchaseItem(index: number) {
    if (confirm(`您是否確定購買 ${this.cartItems[index].destination} 這筆商品？`)) {
      this.cartItems[index].purchased = true;
    }
  }

  productcart = [
    {
      image: 'assets/images/基隆景點正濱漁港.jpeg',
      name: '基隆景點正濱漁港',
      price: 12000,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      quantity: 1
    },
    {
      image: 'assets/images/基隆景點八斗子觀光漁港.jpg',
      name: '基隆景點八斗子觀光漁港',
      price: 10000,
      productdetailUrl: 'productdetail',
      productUrl: 'single-product.html',
      quantity: 1
    },
  ];
  AddToCartService: any;

    // 使用者輸入框
    onQuantityBlur(product: { quantity: number; }) {
    if (product.quantity > 10) {
      alert('一次最多只能選擇10件商品!');
      product.quantity = 10; // 限制最多选择 10 件
    } else if (product.quantity < 1) {
      product.quantity = 1; // 确保数量不能小于 1
    }


  }

    //增加紐
    increaseQuantity(product: { quantity: number; }) {
      product.quantity++;
    }

    decreaseQuantity(product: { quantity: number; }) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    }

    removeProduct(product: any) {
      this.productcart = this.productcart.filter(p => p !== product);
    }

    calculateTotalPrice() {
      return this.productcart.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    checkout() {
    alert('買單測試')
    }


  //   addToCart() {
  //     this.AddToCartService.addToCart(); // 更新购物车数量
  // }

}



