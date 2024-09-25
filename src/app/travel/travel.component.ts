import { Component } from '@angular/core';
import { DatatravelService } from '../datatravel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
filterItems() {
throw new Error('Method not implemented.');
}
  selectedValue: string | null = null;

  dataService: any;
  travelData: any;
  Router:any;
  constructor(private router: Router) {}  // 確保 Router 已被注入

  navigateToTravelTW() {
    this.router.navigate(['/traveltw']);  // 使用 navigate 方法導航
  }
  selectedCategory: string = '';
  //精選旅遊行程
  travelItems = [
    {
      imageUrl: 'assets/images/travelimage/基隆景點正濱漁港.jpeg',
      title: '基隆景點正濱漁港二日遊',
      description: '基隆景點正濱漁港 | 粼島旅店 | 鈺刺身丼',
      linkUrl: '/travelpage2',
      category: '精選行程'
    },
    {
      imageUrl: 'assets/images/travelimage/台北101觀景台.jpg',
      title: '台北101觀景台一日遊',
      description: '台北101觀景台 | 台北大安伊普索酒店 | 台北台式餐廳山海樓',
      linkUrl: '/traveltw',
      category: '精選行程'
    },
    {
      imageUrl: 'assets/images/travelimage/台中高美濕地.jpg',
      title: '台中高美濕地二日遊',
      description: '台中高美濕地 | 台中樂活行館Motel | 台中大江戶町鰻屋',
      linkUrl: '/travelpage2',
      category: '精選行程'
    },
    {
      imageUrl: 'assets/images/travelimage/高雄彩虹教堂.jpg',
      title: '高雄彩虹教堂二日遊',
      description: '高雄彩虹教堂 | 高雄宮賞藝術大飯店 | 高雄摩登餐酒館「永心浮島」',
      linkUrl: 'https://example.com/wuling',
      category: '精選行程'
    },
    {
      imageUrl: 'assets/images/travelimage/花蓮秀林景點.jpg',
      title: '花蓮秀林景點一日遊',
      description: '花蓮秀林景點 | 花蓮迴音谷森林民宿 | 花蓮景觀餐廳原野牧場',
      linkUrl: 'https://example.com/turkey',
      category: '精選行程'
    }
  ];
  //精選景點
  travelItems2 = [
    {
      imageUrl: 'assets/images/travelimage/基隆景點基隆嶼.jpg',
      title: '基隆景點基隆嶼',
      description: '',
      linkUrl: 'https://example.com/switzerland',
      category: '精選景點'
    },
    {
      imageUrl: 'assets/images/travelimage/台北漁人碼頭煙火秀.jpg',
      title: '台北漁人碼頭煙火秀',
      description: '',
      linkUrl: '/travelpage2',
      category: '精選景點'
    },
    {
      imageUrl: 'assets/images/travelimage/台中景點IKEA空中花園.jpeg',
      title: '台中景點IKEA空中花園',
      description: '',
      linkUrl: '/travelpage2',
      category: '精選景點'
    },
    {
      imageUrl: 'assets/images/travelimage/台南後壁景點雅聞湖濱療癒森林.jpg',
      title: '台南後壁景點雅聞湖濱療癒森林',
      description: '',
      linkUrl: 'https://example.com/japan',
      category: '精選景點'
    },
    {
      imageUrl: 'assets/images/travelimage/花蓮景點理想大地A2水岸園區.jpeg',
      title: '花蓮景點理想大地A2水岸園區',
      description: '',
      linkUrl: 'https://example.com/wuling',
      category: '精選景點'
    },
  ];
  //精選住宿
  travelItems3 = [
    {
      imageUrl: 'assets/images/travelimage/台北大安伊普索酒店.jpg',
      title: '台北大安伊普索酒店',
      description: '',
      linkUrl: '/travelpage2',
      category: '精選住宿'
    },
    {
      imageUrl: 'assets/images/travelimage/台中樂活行館Motel.jpg',
      title: '台中樂活行館Motel',
      description: '',
      linkUrl: '/travelpage2',
      category: '精選住宿'
    },
    {
      imageUrl: 'assets/images/travelimage/台南汽車旅館清水漾.jpg',
      title: '台南汽車旅館清水漾',
      description: '',
      linkUrl: 'https://example.com/switzerland',
      category: '精選住宿'
    },
    {
      imageUrl: 'assets/images/travelimage/高雄宮賞藝術大飯店.jpg',
      title: '高雄宮賞藝術大飯店',
      description: '',
      linkUrl: 'https://example.com/wuling',
           category: '精選住宿'
    },
    {
      imageUrl: 'assets/images/travelimage/花蓮悅樂旅店.jpg',
      title: '花蓮悅樂旅店',
      description: '',
      linkUrl: 'https://example.com/japan',
           category: '精選住宿'
    },

  ];
  //美食特搜
  travelItems4 = [
    {
      imageUrl: 'assets/images/travelimage/基隆鈺刺身丼.jpg',
      title: '基隆鈺刺身丼',
      description: '',
      linkUrl: '/travelpage2',
           category: '美食特搜'
    },
    {
      imageUrl: 'assets/images/travelimage/台中大江戶町鰻屋.jpg',
      title: '台中大江戶町鰻屋',
      description: '',
      linkUrl: 'https://example.com/wuling',
            category: '美食特搜'
    },
    {
      imageUrl: 'assets/images/travelimage/高雄摩登餐酒館「永心浮島」.jpg',
      title: '高雄摩登餐酒館「永心浮島」',
      description: '',
      linkUrl: '/travelpage2',
            category: '美食特搜'
    },
    {
      imageUrl: 'assets/images/travelimage/台南阿裕牛肉涮涮鍋.jpg',
      title: '台南阿裕牛肉涮涮鍋',
      description: '',
      linkUrl: 'https://example.com/japan',
            category: '美食特搜'
    },
    {
      imageUrl: 'assets/images/travelimage/花蓮景觀餐廳原野牧場.jpg',
      title: '花蓮景觀餐廳原野牧場',
      description: '',
      linkUrl: 'https://example.com/switzerland',
            category: '美食特搜'
    },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
