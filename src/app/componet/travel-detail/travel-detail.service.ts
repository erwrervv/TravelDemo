// travel-detail.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TravelDetail } from './travel-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TravelDetailService {
  getTravelDetail(): Observable<TravelDetail> {
    // 这里用静态数据作为示例，实际应用中可以从 API 获取数据
    const detail: TravelDetail = {
      title: '基隆景點正濱漁港二日遊',
      imageUrl: 'assets/images/基隆景點正濱漁港.jpeg',
      intro: '有著小威尼斯之稱的基隆景點正濱漁港彩虹小屋，擁有迷人的海景和獨特的在地文化。',
      itinerary: [
        {
          day: '第一天', description: '上午出發，遊覽基隆漁港，享用當地海鮮午餐，下午參觀彩虹小屋，晚上入住當地酒店。',
          meals: undefined
        },
        {
          day: '第二天', description: '上午自由活動，下午返回。',
          meals: undefined
        }
      ],
      pricing: '價格: $12,000 起（包括所有行程安排和餐飲费用）。',
      meals: [
        { type: '早餐', details: '旅館提供早餐' },
        { type: '午餐', details: '海邊餐廳享用午餐' },
        { type: '晚餐', details: '返回台北，享用道地台灣小吃' }
      ],
      transportation: '遊覽車',
      accommodation: '粼島旅店',
      booking: '12,000',

    };

    return of(detail); // 使用 of() 方法模拟 Observable 数据流
  }

  // 連接API方法
  // private apiUrl = 'https://api.example.com/travel-detail'; // API URL

  // constructor(private http: HttpClient) {}

  // // 获取旅游详情
  // getTravelDetail(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }
}
