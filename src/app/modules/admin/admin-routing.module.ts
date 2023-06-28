import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBrandsComponent } from './category/edit-brands/edit-brands.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { EditClasificationComponent } from './category/edit-clasification/edit-clasification.component';
import { EditClientsComponent } from './clientes/edit-clients/edit-clients.component';
import { EditPresentationsComponent } from './products/edit-presentations/edit-presentations.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { EditSubcategoryComponent } from './category/edit-subcategory/edit-subcategory.component';
import { HomeComponent } from '../home/home.component';
import { CrudCategoryComponent } from './category/crud-category/crud-category.component';
import { CrudOrdenesComponent } from './ordenes/crud-ordenes/crud-ordenes.component';
import { CrudPresentationsComponent } from './products/crud-presentations/crud-presentations.component';
import { CRUDProductsComponent } from './products/crud-products/crud-products.component';
import { CrudsClientsComponent } from './clientes/cruds-clients/cruds-clients.component';
import { OrdenDetailAdminComponent } from './ordenes/orden-detail-admin/orden-detail-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from '../shared/footer/footer.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'f', component: CRUDProductsComponent },
      { path: 'orders-admin', component: OrdenDetailAdminComponent },
      { path: 'crud-orden', component: CrudOrdenesComponent },
      { path: 'crud-products', component: CRUDProductsComponent },
      { path: 'crud-clients', component: CrudsClientsComponent },
      {
        path: 'crud-products/edit-products',
        component: EditProductsComponent,
      },
      {
        path: 'crud-clients/edit-clients/:id',
        component: EditClientsComponent,
      },
      {
        path: 'crud-categories/edit-category/:id',
        component: EditCategoryComponent,
      },
      {
        path: 'crud-categories/edit-subcategory/:id',
        component: EditSubcategoryComponent,
      },
      {
        path: 'crud-categories/edit-clasification/:id',
        component: EditClasificationComponent,
      },
      {
        path: 'crud-categories/edit-brands/:id',
        component: EditBrandsComponent,
      },
      {
        path: 'crud-products/crud-presentations/:id/edit-presentation/:code',
        component: EditPresentationsComponent,
      },
      { path: 'crud-categories', component: CrudCategoryComponent },
      { path: 'crud-orden', component: CrudOrdenesComponent },
      {
        path: 'crud-products/crud-presentations/:id',
        component: CrudPresentationsComponent,
      },

      { path: '**', component: FooterComponent },
    ],
  },

  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
