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
  getDataTravel2() {
    return this.http.get(
      `https://localhost:7003/api/ProductTravels1`
    );
  }
  getTravelById(travelId: string): Observable<any> {
    return this.http.get(`https://localhost:7003/api/ProductTravelId/${travelId}`);
  }

  getDataTravel6() {
    return this.http.get<any[]>(`https://localhost:7003/api/ProductTravels?limit=6`).subscribe(data => {
      this.dataItems = data;
      this.displayedItems = data; // 直接使用获取到的六笔数据
    });
  }
}
