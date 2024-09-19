import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataproductService {
  constructor(private http: HttpClient) {}
  // getArticleById(id: number): Observable<any> {
  //   return this.http.get<any>;
  // }



  getProductTable(): Observable<any> {
    return this.http.get<any>('https://localhost:7003/api/MallProductTables');
  }

  getProductDetail(id : number): Observable<any>{

    return this.http.get<any>(`https://localhost:7003/api/MallProductTables/${id}`);
  }

  getProductPic (id : number):Observable<any>{
    return this.http.get<any>(`https://localhost:7003/api/MallProductTables/get-product/${id}`);
  }
  }
  // createOrder(Order){
  //   this.http.post('api',Order)
  // }

