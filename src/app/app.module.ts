import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ArticleoverviewComponent } from './articleoverview/articleoverview.component';
import { TravelComponent } from './travel/travel.component';
import { ShopComponent } from './shop/shop.component';
import { ShoplistComponent } from './component/shoplist/shoplist.component';
import { CartComponent } from './component/cart/cart.component';
import { SwiperModule } from 'swiper/angular';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { RatingModule } from 'primeng/rating';
import { AddToCartService } from './service/add-to-cart.service';


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
    ShoplistComponent,
    CartComponent,
    ProductdetailComponent,




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
    SwiperModule,
    RatingModule,

  ],
  providers: [AddToCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
