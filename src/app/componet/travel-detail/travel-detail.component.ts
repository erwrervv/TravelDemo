import { DatatravelService } from './../../datatravel.service';
// travel-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductTravels } from './travel-detail.model';
import { TravelDetail } from './travel-detail.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css'],
})

export class TravelDetailComponent implements OnInit {
  isTransportationProvided: any;
  travelId: string | null = null;
  travelData: any;
  travel:any;
  cartItems: any;

  constructor(
    private route: ActivatedRoute,
    private datatravelService: DatatravelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.travelId = this.route.snapshot.paramMap.get('id');
    if (this.travelId) {
      this.loadTravelDetail(this.travelId);
    }
  }

  up(): void {
    this.router.navigate(['/travelpage2']);  // 导航到 travelpage2 组件
  }
  add(): void {
    // const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    // cartItems.push(this.travelData);
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // // 添加当前旅行数据到购物清单
    // cartItems.push(this.travelData);

    // // 更新 Local Storage
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // 提示用户
    alert(`${this.travelData.TravelName} 已加入購物清單`);
  }

  loadTravelDetail(travelId: string): void {
    this.datatravelService.getTravelById(travelId).subscribe(
      (data: any) => {
        this.travelData = data;  // 獲取到的旅行資料
        console.log(this.travelData)
      },
      error => {
        console.error('Error fetching travel detail', error);
      }
    );
  }
    AddToCartService: any;
  bookNow(): void {
    // 处理预订逻辑
    alert('立即預訂功能尚未實現');
  }

  onSubmit() {
    // 处理表单提交逻辑，例如发送支付请求
    console.log('支付信息已提交');
  }
}
