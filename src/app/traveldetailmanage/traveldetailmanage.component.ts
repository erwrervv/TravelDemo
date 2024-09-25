import { Component, Input } from '@angular/core';
import { TravelDetail } from '../componet/travel-detail/travel-detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveldetailmanage',
  templateUrl: './traveldetailmanage.component.html',
  styleUrls: ['./traveldetailmanage.component.css']
})
export class TraveldetailmanageComponent {
  travelData: any[] = []; // 初始化為空陣列
  AddToCartService: any;
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



  ngOnInit(): void {
    // 從路由中獲取 travelId
    this.loadCartItems();
  }
  loadCartItems(): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.travelData = cartItems;  // 使用 local storage 的数据
  }
  addToCart(travelData: TravelDetail) {
    console.log(`${travelData.TravelName} 已加入購物車`);
    // 在此處添加購物車的邏輯
  }

  purchaseItem(index: number) {
    this.travelData[index].purchased = true;  // 標記商品為已購買
    localStorage.setItem('travelData', JSON.stringify(this.travelData));  // 更新 Local Storage
  }

   // 刪除購物車項目，並更新 Local Storage
   confirmRemoveItem(index: number) {
    const confirmDelete = confirm('確定要刪除這筆資料嗎？');
    if (confirmDelete) {
      this.removeItem(index);
    }
  }

  // 刪除資料並更新 Local Storage
  removeItem(index: number) {
    this.travelData.splice(index, 1);  // 從陣列中移除項目
    localStorage.setItem('travelData', JSON.stringify(this.travelData));  // 更新 Local Storage
  }
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

    constructor(private router: Router) {
      this.loadCart(); // 初始化時載入購物清單
    }
    loadCart() {
      const cartItems = localStorage.getItem('cart'); // 從本地存儲獲取購物清單資料
      if (cartItems) {
        this.travelData = JSON.parse(cartItems); // 將資料轉換為陣列
      }
    }
    clearCart() {
      localStorage.removeItem('cart'); // 清空本地存儲中的購物清單
      this.travelData = []; // 清空顯示的購物清單資料
    }
  //   addToCart() {
  //     this.AddToCartService.addToCart(); // 更新购物车数量
  // }

}


