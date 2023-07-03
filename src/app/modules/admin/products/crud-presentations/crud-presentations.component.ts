import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationsModel } from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../../../services/products/product.service';

@Component({
  selector: 'app-crud-presentations',
  templateUrl: './crud-presentations.component.html',
  styleUrls: ['./crud-presentations.component.css'],
})
export class CrudPresentationsComponent implements OnInit {
  products: Array<any> = [];
  titles: Array<any> = [
    'code',
    'name',
    'reference',
    'plu',
    'stock',
    'price1',
    'price2',
    'price3',
    'med',
    'bulk',
    'isActive',
    'ProductId',
    'editar',
  ];
  filterPresentations = '';
  idProduct!: number;
  Presentaciones!: PresentationsModel[];

  constructor( private getItemId: ProductService, private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    let URLsearch = `${window.location.href}`;
    let url = URLsearch.split('/')
    let n = url.length;
    this.idProduct = Number(url[n-1]);
    this.getPresentations();
  }

  getPresentations(){
    this.getItemId.getProductById(this.idProduct).subscribe({
      next: (data)=> {
        this.Presentaciones = data.presentations;
      }, error: (err)=>{}
    })
  }



}
