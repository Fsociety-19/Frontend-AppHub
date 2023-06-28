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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { EditClasificationComponent } from './category/edit-clasification/edit-clasification.component';
import { EditClientsComponent } from './clientes/edit-clients/edit-clients.component';
import { EditPresentationsComponent } from './products/edit-presentations/edit-presentations.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { EditSubcategoryComponent } from './category/edit-subcategory/edit-subcategory.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './ordenes/list/list.component';


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
  exports:[
    DashboardComponent,


  ]
})
export class AdminModule { }
