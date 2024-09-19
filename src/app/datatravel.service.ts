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
  checkTransportationAvailability(type: string, selectedOption: boolean) {
    throw new Error('Method not implemented.');
  }
  getTravelDetails() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getDataTravel(travelId: number) {
    return this.http.get<ProductTravels>(
      `https://localhost:7003/api/ProductTravels/${travelId}`
    );
  }

  // 获取所有旅游项目
  getAllTravelDetails(traveldetailsId: number) {
    return this.http.get<TravelDetail[]>(
      `https://localhost:7003/api/TravelDetails/${traveldetailsId}`
    );
  }
}
