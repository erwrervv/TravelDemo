import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  ProductTravels,
  TravelDetail,
} from './componet/travel-detail/travel-detail.model';
@Injectable({
  providedIn: 'root',
})
export class DatatravelService {
  baseUrl: any;
  travelDatas: any;
  singleTravelData: any;
  dataItems: any;
  displayedItems: any;
  currentIndex!: number;
  checkTransportationAvailability(type: string, selectedOption: boolean) {
    throw new Error('Method not implemented.');
  }
  getTravelDetails() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getDataTravel() {
    return this.http.get(
      `https://localhost:7003/api/ProductTravels/`
    );
  }
  getDataTravel6() {
    return this.http.get<any[]>(`https://localhost:7003/api/ProductTravels?limit=6`).subscribe(data => {
      this.dataItems = data;
      this.displayedItems = data; // 直接使用获取到的六笔数据
    });
  }
  // 获取前6笔数据
  // getSixTravelDatas() {
  //   this.http.get(`https://localhost:7003/api/ProductTravels?limit=6`).subscribe((data: any) => {
  //     this.travelDatas = data;
  //     // 之后获取一笔详细数据
  //     this.getOneTravelData(1); // 假设要获取ID为1的详细数据
  //   });
  // }

  // 获取1笔数据
  // getOneTravelData(travelId: number) {
  //   this.http.get(`https://localhost:7003/api/ProductTravels/${travelId}`).subscribe((data: any) => {
  //     this.singleTravelData = data;
  //   });
  // }
  // getDataTravelById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/${id}`);
  // }
  // 获取所有旅游项目
  // getAllTravelDetails() {
  //   return this.http.get(
  //     `https://localhost:7003/api/TravelDetails/`
  //   );
  // }
}
