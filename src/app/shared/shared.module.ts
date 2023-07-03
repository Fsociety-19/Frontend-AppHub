import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderTestComponent } from './header-test/header-test.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { PrimeNGModule } from '../prime-ng.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HeaderTestComponent,

  ],
  imports: [
    CommonModule,
    PrimeNGModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HeaderTestComponent,
  ],
})
export class SharedModule { }
