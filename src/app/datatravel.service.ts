import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TravelDetail } from './componet/travel-detail/travel-detail.model';
@Injectable({
  providedIn: 'root'
})
export class DatatravelService {
getTravelDetails() {
  throw new Error('Method not implemented.');
}
constructor(private http: HttpClient) {}

getDataTravel(travelId:number){
return this.http.get<TravelDetail>(`https://localhost:7003/api/ProductTravels/${travelId}`);
}
}
