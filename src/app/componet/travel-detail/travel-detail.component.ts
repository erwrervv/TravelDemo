import { DatatravelService } from './../../datatravel.service';
// travel-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductTravels } from './travel-detail.model';
import { TravelDetail } from './travel-detail.model';
@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css'],
})
export class TravelDetailComponent implements OnInit {
  travelDetail: ProductTravels | TravelDetail | null = null;
  section: any;
  isTransportationProvided: any;
  travelService: any;
  Transportation: any;
  travel: any;

  constructor(private datatravelService: DatatravelService) {}

  ngOnInit(): void {
    this.loadTravelDetail();
  }
  travelDatas: any;
  travelDatas2:any;
  loadTravelDetail(): void {
    // 这里应该是从服务中获取旅行细节的逻辑
    this.datatravelService.getDataTravel().subscribe((detail: any) => {
      console.log(detail);
      this.travelDatas = detail;
    });
  }
  // 抓API的ID
  // travelDetail: any;

  // constructor(private travelDetailService: TravelDetailService) {}

  // ngOnInit(): void {
  //   const travelId = '1'; // 假设这是你要请求的旅游项目 ID
  //   this.travelDetailService.getTravelDetail(travelId).subscribe(
  //     (data) => {
  //       this.travelDetail = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching travel details:', error);
  //     }
  //   );
  // }

}
