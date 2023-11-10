import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrimeIcons } from 'primeng/api';
import { PrimeNGModule } from '../prime-ng.module';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  providers: [PrimeIcons],
  exports:[
    AuthComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
