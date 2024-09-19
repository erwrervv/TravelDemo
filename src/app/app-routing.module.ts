import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleoverviewComponent } from './articleoverview/articleoverview.component';
import { TravelComponent } from './travel/travel.component';
import { ShopComponent } from './shop/shop.component';
import { ShoplistComponent } from './component/shoplist/shoplist.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { ProducttableComponent } from './component/producttable/producttable.component';
import { OrderpageComponent } from './component/orderpage/orderpage.component';
import { CheckoutComponent } from './component/checkout/checkout.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'article',
    component: ArticleoverviewComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'shoplist',
    component: ShoplistComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'productdetail',
    component: ProductdetailComponent,
  },
  { path: 'productdetail/:id',
     component: ProductdetailComponent
   },
  { path: 'producttable',
     component: ProducttableComponent },
  { path: 'orderpage',
     component: OrderpageComponent },

  { path: 'checkout',
     component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
