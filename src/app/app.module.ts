import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { CategoryComponent } from './pages/products/category/category.component';
import { PrimeIcons } from 'primeng/api';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { PrimeNGModule } from './prime-ng.module';
import { DirectivesModule } from './directives/directives.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './auth/auth.module';
import {TokenInterceptor } from '@interceptors/token.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoryComponent,
    CartComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNGModule,
    AuthModule,
    AdminModule,
    PagesModule,
    SharedModule,
    DirectivesModule
  ],
  providers: [
    PrimeIcons,
    {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
