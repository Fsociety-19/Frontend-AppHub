
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { AuthComponent } from './modules/auth/auth.component';
import { CartComponent } from './modules/cart/cart.component';
import { HistorialCompraComponent } from './modules/historial-compra/historial-compra.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { OrdenComponent } from './modules/orden/orden.component';
import { CategoryComponent } from './modules/products/category/category.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { ProductsComponent } from './modules/products/products/products.component';
import { ChangePasswordComponent } from './modules/recovery-password/change-password/change-password.component';
import { RecoveryPasswordComponent } from './modules/recovery-password/recovery-password.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
  { path: 'category/:name', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'forgot-password', component: RecoveryPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'Account_Verification',
    component: AuthComponent,
  },

  //{ path: 'admin', redirectTo: '/crud-products', pathMatch: 'full' },
  { path: 'orden', component: OrdenComponent },
  { path: 'historial-compra', component: HistorialCompraComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
