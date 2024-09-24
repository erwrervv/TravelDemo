import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  order = {
    member_name: '李明杰',
    member_phone: '0965-525-535',
    member_address: '台北市大安區復興南路380號',
    mall_product_table_name: 'Laptop',
    productQty: 2,
    exchange_time: '2024-09-16',
    exchange_status: '已付款'
  };
  constructor() {}
  products: any[] = [];
  ngOnInit(): void {



  }

}
