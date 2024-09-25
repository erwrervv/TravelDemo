import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { ShopComponent } from './shop/shop.component';
import { ArticleoverviewComponent } from './component/articleoverview/articleoverview.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { ArticlePostComponent } from './component/article-post/article-post.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleListPostComponent } from './component/article-list-post/article-list-post.component';
import { ShoplistComponent } from './component/shoplist/shoplist.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { ProducttableComponent } from './component/producttable/producttable.component';
import { OrderpageComponent } from './component/orderpage/orderpage.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ShopbannerComponent } from './shop/shopbanner/shopbanner.component';
import { ShopHomePageComponent } from './shop/shop-home-page/shop-home-page.component';
import { Travelpage2Component } from './componet/travelpage2/travelpage2.component';

import { TravelDetailComponent } from './componet/travel-detail/travel-detail.component';
import { TraveldetailmanageComponent } from './traveldetailmanage/traveldetailmanage.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
  }
  ,
  {
    path: 'login',
    component: LoginComponent,
  }
  ,
  {
    path: 'article',
    component: HomepageComponent,
  }
  ,
  {
    path: 'article/like/:name',
    component: HomepageComponent,
  }
  , {
    path: 'article/:id',
    component: ArticleoverviewComponent,
  }
  , {
    path: 'travel',
    component: TravelComponent,
  }
  , {
    path: 'shop',
    component: ShopComponent
  }
  , {
    path: 'article-post',
    component: ArticlePostComponent,
    canActivate: [authGuard]
  },
  {
    path: 'article-post/:id',
    component: ArticlePostComponent,
    canActivate: [authGuard]
  },
  {
    path: 'article-list',
    component: ArticleListComponent
  }
  ,
  {
    path: 'article-list-post',
    component: ArticleListPostComponent,
    canActivate: [authGuard]
  }
  ,
  {
    path: 'article-list-post/:id',
    component: ArticleListPostComponent,
    canActivate: [authGuard]
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
  {
    path: 'productdetail/:id',
    component: ProductdetailComponent
  },
  {
    path: 'producttable',
    component: ProducttableComponent
  },
  {
    path: 'orderpage',
    component: OrderpageComponent
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'shopbanner',
    component: ShopbannerComponent,
  },
  {
    path: 'shophomepage',
    component: ShopHomePageComponent,


    children: [
      { path: 'orderpage', component: OrderpageComponent },
      { path: 'productdetail', component: ProductdetailComponent },
      { path: 'shoplist', component: ShoplistComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
  {
    path: 'travelpage2',
    component: Travelpage2Component,
  },
  {
    path: 'traveldetail',
    component: TravelDetailComponent,
  },
  {
    path: 'travel-detail/:id',
    component: TravelDetailComponent
  },
  { path: 'traveldetailmanage',
    component: TraveldetailmanageComponent
  },
  {
    path: 'orderpage/:shopRecordid',
    component: OrderpageComponent
  },

  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
