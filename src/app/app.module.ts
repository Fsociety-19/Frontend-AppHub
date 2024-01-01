import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimeIcons } from 'primeng/api';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { PrimeNGModule } from './prime-ng.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNGModule,
    PagesModule,
    SharedModule,
  ],
  providers: [
    PrimeIcons,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
