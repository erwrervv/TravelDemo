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
import { ArticleoverviewComponent } from './component/articleoverview/articleoverview.component';
import { TravelComponent } from './travel/travel.component';
import { ShopComponent } from './shop/shop.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticlePostComponent } from './component/article-post/article-post.component';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { LogintaComponent } from './component/loginta/loginta.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DataService } from './data.service';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

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
    LogintaComponent,
    HomepageComponent,
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
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
