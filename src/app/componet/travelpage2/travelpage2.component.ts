import { Component, HostListener, OnInit } from '@angular/core';
import { DatatravelService } from 'src/app/datatravel.service';
import { ProductTravels, TravelDetail } from '../travel-detail/travel-detail.model';
@Component({
  selector: 'app-travelpage2',
  templateUrl: './travelpage2.component.html',
  styleUrls: ['./travelpage2.component.css']
})
export class Travelpage2Component implements OnInit {
  travelDetail:ProductTravels | TravelDetail | null = null;
  section: any;
  isTransportationProvided: any;
  travelService: any;
  Transportation: any;
  travel: any;

  constructor(private datatravelService:
     DatatravelService) {}


  ngOnInit(): void {
    const travelId = 1;
    this.loadTravelDetail();
  }

  travelDatas: any;

  loadTravelDetail(): void {
    // 这里应该是从服务中获取旅行细节的逻辑
    this.datatravelService.getDataTravel().subscribe((detail: any) => {
      console.log(detail);
      this.travelDatas = detail;
    });
  }
  loadTravelDetail2(): void {
    // 这里应该是从服务中获取旅行细节的逻辑
    this.datatravelService.getDataTravel().subscribe((Pictures: any) => {
      console.log(Pictures);
      this.travelDatas = Pictures;
    });
  }

  getFirstTenRecords(data:any[]){
    return data.length>10 ? data.slice(0.10): data;
  }
  departureDate: string = '';
  returnDate: string = '';
  departureLocation: string = '';
  arrivalLocation: string = '';
  searchKeyword: string = ''; // 保存搜索关键字

  travelList = [
    {
      imageUrl: 'assets/images/travelimage/基隆景點正濱漁港.jpeg',
      altText: '基隆景點正濱漁港圖片',
      title: '基隆景點正濱漁港二日遊',
      description: '有著小威尼斯之稱的基隆景點正濱漁港彩虹小屋...',
      tags: ['自然生態', '在地文化體驗'],
      date: '9/24, 9/25',
      price: '$12,000 起',
      link: '/traveldetail'
    },
    {
      imageUrl: 'assets/images/travelimage/基隆景點八斗子觀光漁港.jpg',
      altText: '基隆景點八斗子觀光漁港圖片',
      title: '基隆景點八斗子觀光漁港',
      description: '基隆景點八斗子觀光漁港也稱為碧砂漁港...',
      tags: ['自然生態', '在地文化體驗'],
      date: '9/26, 9/27',
      price: '$10,000 起',
      link: '/traveldetail'
    },
    {
      imageUrl: 'assets/images/travelimage/基隆景點和平島公園.jpg',
      altText: '基隆景點和平島公園圖片',
      title: '基隆景點和平島公園',
      description: '基隆必去景點和平島公園可以「遊山」也能「玩水」、能在由雷達站改建而成的咖啡廳享用下午茶...',
      tags: ['自然生態', '在地文化體驗'],
      date: '9/27, 9/29',
      price: '$26,800 起',
      link: '/traveldetail'
    },
    {
      imageUrl: 'assets/images/travelimage/基隆景點外木山海岸.jpg',
      altText: '基隆景點外木山海岸圖片',
      title: '基隆景點外木山海岸',
      description: '基隆景點外木山海岸全長約5公里，從外木山漁港到澳底的公路...',
      tags: ['自然生態', '在地文化體驗'],
      date: '10/02, 10/5',
      price: '$30,000 起',
      link: '/traveldetail'
    },
    {
      imageUrl: 'assets/images/travelimage/基隆景點阿拉寶灣.jpg',
      altText: '基隆景點阿拉寶灣圖片',
      title: '基隆景點阿拉寶灣',
      description: '和平島公園園區內的基隆景點阿拉寶灣，被譽為「全球最美日出景點」...',
      tags: ['自然生態', '在地文化體驗'],
      date: '10/02, 10/16',
      price: '$26,800 起',
      link: '/traveldetail'
    },
    {
      imageUrl: 'assets/images/travelimage/基隆景點潮境公園.jpg',
      altText: '基隆景點潮境公園圖片',
      title: '基隆景點潮境公園',
      description: '基隆景點潮境公園有寬闊的綠地及涼亭，並規劃有完善的觀海步道、林蘟步道、自行車道...',
      tags: ['自然生態', '在地文化體驗'],
      date: '10/02, 10/16',
      price: '$26,800 起',
      link: '/traveldetail'
    }
  ];

  filteredTravelList = [...this.travelList]; // 用于存储过滤后的结果

  onSearch() {
    const keyword = this.searchKeyword.trim().toLowerCase();
    if (keyword) {
      this.filteredTravelList = this.travelList.filter(travel =>
        travel.title.toLowerCase().includes(keyword) ||
        travel.description.toLowerCase().includes(keyword) ||
        travel.tags.some(tag => tag.toLowerCase().includes(keyword)) ||
        travel.date.includes(keyword)
      );
    } else {
      this.filteredTravelList = [...this.travelList]; // 若無關鍵字，則顯示所有項目
    }
  }

[x: string]: any;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

