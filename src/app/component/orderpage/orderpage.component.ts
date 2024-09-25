import { DataproductService } from 'src/app/service/dataproduct.service';
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  shopRecordid!: number;
  orderDetails: any= {};
  order = {
    member_name: '李明杰',
    member_phone: '0965-525-535',
    member_address: '台北市大安區復興南路380號',
    mall_product_table_name: 'Laptop',
    productQty: 2,
    exchange_time: '2024-09-16',
    exchange_status: '已付款'
  };


  constructor(
    private route: ActivatedRoute,
    private dPservice: DataproductService

  ) {}

  ngOnInit(): void {
    const shopRecordIdParam = this.route.snapshot.paramMap.get('shopRecordid');
    if (shopRecordIdParam !== null) {
      this.shopRecordid = +shopRecordIdParam;
      this.dPservice.getOrdertDetails(this.shopRecordid)
        .subscribe(response => {
          this.orderDetails = response;
        });
    } else {
      console.error('訂單編號不存在');
    }
  }

}
