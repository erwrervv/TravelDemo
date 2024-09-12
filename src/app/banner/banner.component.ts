import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  locations = ['台北', '台中', '台南', '台東'];
  selectedValues: string[] = [];
  images: string[] = [
    "assets/images/台中景點背景圖.jpg",
    "assets/images/高雄背景圖.jpg",
    "assets/images/101背景圖.jpg",
    "assets/images/台灣東部背景圖.jpg"
  ];
  currentIndex = 0; // 当前显示的图片索引
  autoSlideInterval: any; // 定时器变量
  router: any;
  ngOnInit(): void {
    this.startAutoSlide(); // 启动自动切换
  }
  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval); // 清除定时器
    }
  }
  // 获取当前图片的位置
  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
  // 切换到下一张图片
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  // 切换到上一张图片
  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  // 自动切换图片，每隔3秒切换到下一张
  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 3000); // 3 秒切换一次
  }
  onImageClick(image: any) {
    // 打开新链接，或执行其他操作
    window.open(image.link, '_blank');
  }
  // constructor(private router: Router) {}
  navigateHome() {
    this.router.navigate(['/']).then(() => {
      // 使用导航后再执行刷新操作
      window.location.reload();
    });
  }
  isFormVisible: boolean = true;
  showForm() {
    this.isFormVisible = true;  // 显示表单
  }
  hideForm() {
    this.isFormVisible = false;  // 隐藏表单
  }
  [x: string]: any;
  navigateToExternalSite() {
    window.open('https://www.example.com', '_blank');
  }
  //搜尋
  searchText: string = '';  // 用户输入的文本
  // locations: string[] = ['Taipei', 'Taichung', 'Kaohsiung', 'Tainan'];  // 地点列表
  filteredLocations: string[] = [];  // 过滤后的地点列表
  isDropdownVisible: boolean = false;  // 控制下拉菜单的显示状态
  // 过滤地点列表
  filterLocations() {
    const searchTextLower = this.searchText.toLowerCase();  // 忽略大小写
    this.filteredLocations = this.locations.filter(location =>
      location.toLowerCase().includes(searchTextLower)
    );
    this.isDropdownVisible = this.filteredLocations.length > 0;  // 有匹配结果时显示下拉菜单
  }
  // 显示下拉菜单（当输入框获得焦点时）
  showDropdown() {
    this.isDropdownVisible = this.filteredLocations.length > 0;  // 如果有匹配结果显示下拉菜单
  }
  // 选择地点
  selectLocation(location: string) {
    this.searchText = location;  // 设置输入框的值为选择的地点
    this.isDropdownVisible = false;  // 选择后隐藏下拉菜单
  }
  // 隐藏下拉菜单（当输入框失去焦点时）
  hideDropdown() {
    setTimeout(() => {
      this.isDropdownVisible = false;
    }, 200);  // 延迟隐藏下拉菜单以允许用户点击选项
  }
  //人數控制
  travelForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.travelForm = this.fb.group({
      numberOfTravelers: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
    });
  }
  // 表单提交逻辑
  onSubmit() {
    if (this.travelForm.valid) {
      console.log('表单有效:', this.travelForm.value);
    } else {
      console.log('表单无效');
    }
  }
  //精選旅遊行程
  travelItems = [
    {
      imageUrl: 'assets/image2/基隆景點正濱漁港.jpeg',
      title: '基隆景點正濱漁港二日遊',
      description: '基隆景點正濱漁港 | 粼島旅店 | 鈺刺身丼',
      linkUrl: '/travelpage2'
    },
    {
      imageUrl: 'assets/image/台北101觀景台.jpg',
      title: '台北101觀景台一日遊',
      description: '台北101觀景台 | 台北大安伊普索酒店 | 台北台式餐廳山海樓',
      linkUrl: '/travelpage2'
    },
    {
      imageUrl: 'assets/image/台中高美濕地.jpg',
      title: '台中高美濕地二日遊',
      description: '台中高美濕地 | 台中樂活行館Motel | 台中大江戶町鰻屋',
      linkUrl: 'https://example.com/switzerland'
    },
    {
      imageUrl: 'assets/image/台南井仔腳瓦盤鹽田.jpg',
      title: '台南井仔腳瓦盤鹽田三日遊',
      description: '台南井仔腳瓦盤鹽田 | 台南汽車旅館清水漾 | 金刀比罗宫',
      linkUrl: 'https://example.com/japan'
    },
    {
      imageUrl: 'assets/images/image5.jpg',
      title: '武陵仙境，赏枫迎秋',
      description: '入住全新武陵富野渡假村 | 感受四季之美',
      linkUrl: 'https://example.com/wuling'
    },
    {
      imageUrl: 'assets/images/image6.jpg',
      title: '东西方文明的浪漫·土耳其',
      description: '世界遗产 | 热气球 | 洞穴饭店 | 双游船',
      linkUrl: 'https://example.com/turkey'
    }
  ];
  selectedValue: string | null = null;

  // 处理复选框状态变化
  toggleCheckbox(value: string) {
    // 如果当前值已被选择，取消选择
    if (this.selectedValue === value) {
      this.selectedValue = null;
    } else {
      // 更新选中的值
      this.selectedValue = value;
    }
  }

  // 检查复选框是否被选中
  isChecked(value: string): boolean {
    return this.selectedValue === value;
  }

  // 检查复选框是否可以被选中
  isDisabled(value: string): boolean {
    // 如果 '是' 被选中，则禁用 '否'
    // 如果 '否' 被选中，则禁用 '是'
    return (this.selectedValue === '是' && value === '否') || (this.selectedValue === '否' && value === '是');
  }
}
