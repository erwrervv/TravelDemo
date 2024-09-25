// travel-detail.model.ts
export interface ProductTravels {
  TravelId: number;
  AllDays: number;
  TravelName: string;
  TravelareaId: number | null;
  TravelDatetime: string;
  TravelIntroduction: string;
  TravelMeetingpoint: string;
  ProductShow: string | null;
  Price: number;
  Pictures: string;
  TravelDetails: any[];  // 如果你知道TravelDetails的具体结构，可以更具体化定义
  Travelarea: string | null;  // 根据你的数据结构可以调整
  TravelpicturesTables: any[];  // 如果有具体的图片表结构，可以具体化定义
  Url:string;
}

export interface TravelDetail {
  purchased: boolean;
  TravelName: any;
Title: any;
  TravelDetailsId: number;
  TravelId: number;
  TravelDetailedIntroduction: string;
  TourBus: string | null; // 可以根据需求更改类型
  Bus: string | null; // 可以根据需求更改类型
  Train: boolean;
  MorningName: string;
  LunchName: string;
  DinnerName: string;
  AccommodationName: string;
  WhichDay: number | null;
  Pictures: string;
  Url:string;
}
