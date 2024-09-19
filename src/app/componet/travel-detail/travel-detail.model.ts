// travel-detail.model.ts
export interface ProductTravels {
  TravelId: number;               // TravelId 对应后端的 TravelId
  AllDays: number;         // AllDays 对应后端的 AllDays
  TravelName: string;                  // TravelName 对应后端的 TravelName
  TravelAreaId: number;    // TravelareaId 对应后端的 TravelareaId
  TravelDatetime: Date;    // TravelDatetime 对应后端的 TravelDatetime
  Intro: string;                  // TravelIntroduction 对应后端的 TravelIntroduction
  TravelMeetingpoint: string;     // TravelMeetingpoint 对应后端的 TravelMeetingpoint
  ProductShow: boolean;    // ProductShow 对应后端的 ProductShow
  Price: number;           // Price 对应后端的 Price
  ImageUrl: string;               // 图片的URL
  Itinerary: {
    Meals: any;                   // 餐饮信息
    Day: string;                  // 行程的天数
    Description: string;          // 行程的描述
    TravelIntroduction: string;
  }[];
  Pricing: string;                // 定价信息
  Transportation: string;         // 交通信息

  // Booking: string;                // 预订信息
}
export interface TravelDetail {
  TravelDetailsId: number;
  TravelId: number;
  AccommodationName: string;          // 住宿信息
  TravelDetailsIdIntroduction: string;
  TourBus: boolean;
  Bus: boolean;
  Train : boolean;
  MorningName: string;
  LunchName: string;
  DinnerName: string;
  Whichday: number;
}
