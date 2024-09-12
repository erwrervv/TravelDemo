import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleoverviewComponent } from './articleoverview/articleoverview.component';
import { TravelComponent } from './travel/travel.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path:'home',
    component:HomeComponent,
  }
  ,{
    path:'article',
    component:ArticleoverviewComponent,
  }
  ,{
    path:'travel',
    component:TravelComponent,
  }
  ,{
    path:'shop',
    component:ShopComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
