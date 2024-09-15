import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleoverviewComponent } from './articleoverview/articleoverview.component';
import { TravelComponent } from './travel/travel.component';
import { ShopComponent } from './shop/shop.component';
import { Travelpage2Component } from './componet/travelpage2/travelpage2.component';

import { TravelDetailComponent } from './componet/travel-detail/travel-detail.component';
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
    path: 'travelpage2',
    component: Travelpage2Component,
  },
  {
    path: 'traveldetail',
    component: TravelDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
