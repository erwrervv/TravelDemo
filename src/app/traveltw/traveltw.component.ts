import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatatravelService } from '../datatravel.service';
@Component({
  selector: 'app-traveltw',
  templateUrl: './traveltw.component.html',
  styleUrls: ['./traveltw.component.css'],
})
export class TraveltwComponent implements OnInit {

  constructor(private datatravelService: DatatravelService) {}

  ngOnInit(): void {
    const travelId = 1;
    this.loadTravelDetail();
  }
  loadTravelDetail() {
    throw new Error('Method not implemented.');
  }
  tw: any;
  gettreaveltw() {
    this.datatravelService.getDataTravel2().subscribe((detail: any) => {
      this.tw = detail;
    });
  }
  departureDate: string = '';
  returnDate: string = '';
  departureLocation: string = '';
  arrivalLocation: string = '';
  searchKeyword: string = ''; // 保存搜索关键字
  
  filteredTravelList = [...this['travelList']]; // 用于存储过滤后的结果

  onSearch() {
    const keyword = this.searchKeyword.trim().toLowerCase();
    if (keyword) {
      this.filteredTravelList = this['travelList'].filter((travel: { title: string; description: string; tags: any[]; date: string | string[]; }) =>
        travel.title.toLowerCase().includes(keyword) ||
        travel.description.toLowerCase().includes(keyword) ||
        travel.tags.some(tag => tag.toLowerCase().includes(keyword)) ||
        travel.date.includes(keyword)
      );
    } else {
      this.filteredTravelList = [...this['travelList']]; // 若無關鍵字，則顯示所有項目
    }
  }

[x: string]: any;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}



