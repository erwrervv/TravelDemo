import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ArticleoverviewComponent } from './component/articleoverview/articleoverview.component';
import { TravelComponent } from './travel/travel.component';
import { Travelpage2Component } from './componet/travelpage2/travelpage2.component';
import { ShopComponent } from './shop/shop.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticlePostComponent } from './component/article-post/article-post.component';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DataService } from './data.service';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { LoginComponent } from './component/login/login.component';
import { ArticleListPostComponent } from './component/article-list-post/article-list-post.component';
import { ArticleListHomeComponent } from './component/article-list-home/article-list-home.component';
import { AuthInterceptor } from './auth.interceptor';
import { ShoplistComponent } from './component/shoplist/shoplist.component';
import { CartComponent } from './component/cart/cart.component';
import { SwiperModule } from 'swiper/angular';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { RatingModule } from 'primeng/rating';
import { AddToCartService } from './service/add-to-cart.service';
import { ProducttableComponent } from './component/producttable/producttable.component';
import { OrderpageComponent } from './component/orderpage/orderpage.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ShopbannerComponent } from './shop/shopbanner/shopbanner.component';
import { Shopbanner1Component } from './shop/shopbanner1/shopbanner1.component';
import { ShopHomePageComponent } from './shop/shop-home-page/shop-home-page.component';
import { ComponetComponent } from './componet/componet.component';
import { TravelDetailComponent } from './componet/travel-detail/travel-detail.component';
import { TraveldetailmanageComponent } from './traveldetailmanage/traveldetailmanage.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    ArticleoverviewComponent,
    TravelComponent,
    ShopComponent,
    ArticleListComponent,
    ArticlePostComponent,
    CommentListComponent,
    HomepageComponent,
    LoginComponent,
    ArticleListPostComponent,
    ArticleListHomeComponent,
    ShoplistComponent,
    CartComponent,
    ProductdetailComponent,
    ProducttableComponent,
    OrderpageComponent,
    CheckoutComponent,
    ShopbannerComponent,
    Shopbanner1Component,
    ShopHomePageComponent,
    ComponetComponent,
    Travelpage2Component,
    TravelDetailComponent,
    TraveldetailmanageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    CheckboxModule,
    ButtonModule,
    EditorModule,
    DropdownModule,
    TabViewModule,
    RadioButtonModule,
    SwiperModule,
    RatingModule,
  ],
  providers: [DataService, AddToCartService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
