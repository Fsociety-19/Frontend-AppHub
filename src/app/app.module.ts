import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { SliderComponent } from './modules/shared/slider/slider.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import { ProductsComponent } from './modules/products/products/products.component';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {GalleriaModule} from 'primeng/galleria';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BadgeModule} from 'primeng/badge';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { CategoryComponent } from './modules/products/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
//primeNG modules---------------
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {FileUploadModule} from 'primeng/fileupload';
import {ListboxModule} from 'primeng/listbox';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
import { CartComponent } from './modules/cart/cart.component';
import { RecoveryPasswordComponent } from './modules/recovery-password/recovery-password.component';
import { CRUDProductsComponent } from './modules/admin/products/crud-products/crud-products.component';
import {TableModule} from 'primeng/table';
import { CrudsClientsComponent } from './modules/admin/clientes/cruds-clients/cruds-clients.component';
import {SidebarModule} from 'primeng/sidebar';
import { LoginComponent } from './modules/login/login.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { AuthComponent } from './modules/auth/auth.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditProductsComponent } from './modules/admin/products/edit-products/edit-products.component';
import { EditClientsComponent } from './modules/admin/clientes/edit-clients/edit-clients.component';
import { CrudCategoryComponent } from './modules/admin/category/crud-category/crud-category.component';
import { OrdenComponent } from './modules/orden/orden.component';
import { EditCategoryComponent } from './modules/admin/category/edit-category/edit-category.component';
import { EditSubcategoryComponent } from './modules/admin/category/edit-subcategory/edit-subcategory.component';
import { EditClasificationComponent } from './modules/admin/category/edit-clasification/edit-clasification.component';
import { EditBrandsComponent } from './modules/admin/category/edit-brands/edit-brands.component';
import { CrudOrdenesComponent } from './modules/admin/ordenes/crud-ordenes/crud-ordenes.component';
import { OrdenDetailAdminComponent } from './modules/admin/ordenes/orden-detail-admin/orden-detail-admin.component';
import { HistorialCompraComponent } from './modules/historial-compra/historial-compra.component';
import { CrudPresentationsComponent } from './modules/admin/products/crud-presentations/crud-presentations.component';
import { EditPresentationsComponent } from './modules/admin/products/edit-presentations/edit-presentations.component';
import { ChangePasswordComponent } from './modules/recovery-password/change-password/change-password.component';
import { FilterPipe } from './modules/shared/pipes/filter.pipe';

import { HeaderTestComponent } from './modules/shared/header-test/header-test.component';
import { AdminModule } from './modules/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoryComponent,
    CartComponent,
    RecoveryPasswordComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    OrdenComponent,
    HistorialCompraComponent,
    ChangePasswordComponent,
    HeaderTestComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MegaMenuModule,
    ButtonModule,
    CarouselModule,
    ImageModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    RatingModule,
    SelectButtonModule,
    InputNumberModule,
    GalleriaModule,
    AutoCompleteModule,
    BadgeModule,
    ToggleButtonModule,
    ListboxModule,
    OverlayPanelModule,
    TableModule,
    SidebarModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ToastModule,
    FileUploadModule,
    TriStateCheckboxModule,
    ConfirmDialogModule,

  ],
  providers: [PrimeIcons],
  bootstrap: [AppComponent]
})
export class AppModule { }
