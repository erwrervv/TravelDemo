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

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path:'home',
    component:HomeComponent,
  }
  ,
  {
    path:'login',
    component:LoginComponent,
  }
  ,
  {
    path:'article',
    component:HomepageComponent,
  }
  ,
  {
    path:'article/like/:name',
    component:HomepageComponent,
  }
  ,{
    path:'article/:id',
    component:ArticleoverviewComponent,
  }
  ,{
    path:'travel',
    component:TravelComponent,
  }
  ,{
    path:'shop',
    component:ShopComponent
  }
  ,{
    path:'article-post',
    component:ArticlePostComponent,
    canActivate:[authGuard]
  },
  {
    path:'article-post/:id',
    component:ArticlePostComponent,
    canActivate:[authGuard]
  },
  {
    path:'article-list',
    component:ArticleListComponent
  }
  ,
  {
    path:'article-list-post',
    component:ArticleListPostComponent,
    canActivate:[authGuard]
  }
  ,
  {
    path:'article-list-post/:id',
    component:ArticleListPostComponent,
    canActivate:[authGuard]

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
