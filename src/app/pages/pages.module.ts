import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';
import { AppComponent } from '../app.component';
import { PrimeNGModule } from '../prime-ng.module';

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
  ],
  providers: [PrimeIcons],
  bootstrap: [AppComponent]
})
export class PagesModule { }
