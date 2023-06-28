import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../../products/service/product.service';
import { PrimeIcons } from 'primeng/api';
import { ApiCrudService } from '../../../services/cruds/api-cruds.service';

@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.css'],
})
export class CRUDProductsComponent implements OnInit {
  products: Array<any> = [];
  images: Array<any> = [];
  options: Array<any> = [];
  focus: any;
  responsiveOptions: any;
  titles: Array<any> = [
    'ID',
    'NOMBRE PRODUCTO',
    'DESCRIPCION',
    'ID MARCA',
    'ID CLASIFICACION',
    'DESCUENTO',
    'INICIO DESCUENTO',
    'FIN DESCUENTO',
    'IVA',
    'ESTADO',
    'EDITAR',
    'ELIMINAR'
  ];
  New: any = 'new';
  loading: boolean = true;
  filterProducts = '';

  //Variables de api
  Products: any = [];
  constructor( private apiServices: ProductService, private api: ApiCrudService) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    this.getItems();
  }

  getItems() {
    this.api.getCruds('v1/store/products').subscribe({
      next: (data) => {
        this.Products = data;
        this.loading = false;
      },
      error: (err) => {},
    });
  }

  deleteProduct(id: number) {
    this.apiServices.deleteProduct(id).subscribe();
    this.getItems();
  }
}
