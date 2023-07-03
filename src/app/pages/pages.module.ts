import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { PrimeIcons } from 'primeng/api';
import {PrimeNGModule} from './../prime-ng.module'
import { AppComponent } from '../app.component';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
import { OrdenComponent } from './orden/orden.component';
import { ChangePasswordComponent } from './recovery-password/change-password/change-password.component';


@NgModule({
  declarations: [
    RecoveryPasswordComponent,
    OrdenComponent,
    HistorialCompraComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule

  ],
  exports:[
    RecoveryPasswordComponent,
    OrdenComponent,
    HistorialCompraComponent,
    ChangePasswordComponent,
  ],
  providers: [PrimeIcons],
  bootstrap: [AppComponent]
})
export class PagesModule { }
