// travel-detail.model.ts
export interface TravelDetail {
meals: any;
  title: string;
  imageUrl: string;
  intro: string;
  itinerary: {
meals: any; day: string; description: string
}[]
  pricing: string;
  transportation: string;
  accommodation: string;
  booking: string;
}

