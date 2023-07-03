import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartDirective } from './add-to-cart.directive';



@NgModule({
  declarations: [
    AddToCartDirective
  ],
  exports:[
    AddToCartDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
