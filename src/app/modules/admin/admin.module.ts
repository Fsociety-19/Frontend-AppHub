import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditBrandsComponent } from './category/edit-brands/edit-brands.component';
import { CrudCategoryComponent } from './category/crud-category/crud-category.component';
import { CrudOrdenesComponent } from './ordenes/crud-ordenes/crud-ordenes.component';
import { CrudPresentationsComponent } from './products/crud-presentations/crud-presentations.component';
import { CRUDProductsComponent } from './products/crud-products/crud-products.component';
import { CrudsClientsComponent } from './clientes/cruds-clients/cruds-clients.component';
import { OrdenDetailAdminComponent } from './ordenes/orden-detail-admin/orden-detail-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { EditClasificationComponent } from './category/edit-clasification/edit-clasification.component';
import { EditClientsComponent } from './clientes/edit-clients/edit-clients.component';
import { EditPresentationsComponent } from './products/edit-presentations/edit-presentations.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { EditSubcategoryComponent } from './category/edit-subcategory/edit-subcategory.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './ordenes/list/list.component';
import { PrimeNGModule } from 'src/app/prime-ng.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CRUDProductsComponent,
    CrudsClientsComponent,
    EditProductsComponent,
    EditClientsComponent,
    CrudCategoryComponent,
    EditCategoryComponent,
    EditSubcategoryComponent,
    EditClasificationComponent,
    EditBrandsComponent,
    CrudOrdenesComponent,
    OrdenDetailAdminComponent,
    CrudPresentationsComponent,
    EditPresentationsComponent,
    AdminComponent,
    FilterPipe,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    PrimeNGModule
  ],
  exports:[
    DashboardComponent,
    CRUDProductsComponent,
    CrudsClientsComponent,
    EditProductsComponent,
    EditClientsComponent,
    CrudCategoryComponent,
    EditCategoryComponent,
    EditSubcategoryComponent,
    EditClasificationComponent,
    EditBrandsComponent,
    CrudOrdenesComponent,
    OrdenDetailAdminComponent,
    CrudPresentationsComponent,
    EditPresentationsComponent,
    AdminComponent,
    FilterPipe,
    ListComponent,
  ]
})
export class AdminModule { }
