import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { CartComponent } from './pages/cart/cart.component';
import { HistorialCompraComponent } from './pages/historial-compra/historial-compra.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { CategoryComponent } from './pages/products/category/category.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { ChangePasswordComponent } from './pages/recovery-password/change-password/change-password.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from './guards/redirect.guard';
import { CreateAppointmentComponent } from './pages/students/appointments/create/create-appointment.component';
import { ListAppointmentsComponent } from './pages/staff/appointments/list-appointments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-appointment', component:CreateAppointmentComponent},
  { path: 'appointments-staff', component:ListAppointmentsComponent},
  {
    path: 'change-password',
    canActivate: [AuthGuard],
    component: ChangePasswordComponent,
  },

  { path: 'login', canActivate: [RedirectGuard], component: LoginComponent },
  { path: 'sign-in',canActivate: [RedirectGuard], component: SignInComponent },
  { path: 'sign-up',canActivate: [RedirectGuard], component: SignUpComponent },
  {
    path: 'Account_Verification' ,canActivate: [RedirectGuard],
    component: AuthComponent,
  },

  //{ path: 'admin', redirectTo: '/crud-products', pathMatch: 'full' },
  { path: 'orden', canActivate: [AuthGuard], component: OrdenComponent },
  {
    path: 'historial-compra',
    canActivate: [AuthGuard],
    component: HistorialCompraComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
