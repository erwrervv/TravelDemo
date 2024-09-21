import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  order = {
    member_name: 'John Doe',
    member_phone: '123-456-7890',
    member_address: '123 Main St, Springfield',
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
