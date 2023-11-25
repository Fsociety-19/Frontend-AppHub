import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import {
  BarndsModels,
  CategoriesModels,
  ClasificationModel,
  SubcategoriesModel,
} from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../../../services/products/product.service';

@Component({
  selector: 'app-crud-category',
  templateUrl: './crud-category.component.html',
  styleUrls: ['./crud-category.component.css'],
  providers: [ConfirmationService],
})
export class CrudCategoryComponent implements OnInit {
  products: Array<any> = [];
  titles: Array<any> = ['Nombre', 'Imagen', 'Editar', 'Eliminar'];
  titlesSubcategoria: Array<any> = [
    'Categoria Asociada',
    'Nombre',
    'Imagen',
    'Editar',
    'Eliminar',
  ];
  titlesclasificacion: Array<any> = [
    'Sub Categoria Asociada',
    'Nombre',
    'Imagen',
    'Editar',
    'Eliminar',
  ];
  titlesMarcas: Array<any> = ['Nombre', 'Imagen', 'Editar', 'Eliminar'];

  //variables api
  //categoria
  categorias: CategoriesModels[] = [];
  //Subcategoria
  subCategorias: SubcategoriesModel[] = [];
  //Clasificacion
  clasificaciones: ClasificationModel[] = [];
  //Marcas
  marcas: BarndsModels[] = [];
  filterClasifications = '';
  filterBrands = '';
  filterCategories = '';
  filterSubcategories = '';

  constructor(
    private productService: ProductService,
    private confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {

    this.products.push(
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      },
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      },
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      },
      {
        nombre: 'Nombre',
        imagen: 'Imagen',
        category: 'Categoria asosiada',
        subCategory: 'Sub categoria asociada',
      }
    );
    this.getCategorias();
    this.getSubcategorias();
    this.getClasificaciones();
    this.getMarcas();
  }
  //Categories
  getCategorias() {
    this.productService.getCategories().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (err) => {
      },
    });
  }

  deleteCategory(id: any) {
    this.confirmService.confirm({
      message: '¿Estas seguro de querer eliminar este Item?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.deleteCategory(id).subscribe({
          next: (data) => {
            location.reload();
          },
          error: (err) => {
          },
        });
      },
    });
  }

  //Subcategories
  getSubcategorias() {
    this.productService.getSubcategories().subscribe({
      next: (data) => {
        this.subCategorias = data;
      },
      error: (err) => {
      },
    });
  }

  deleteSubcategory(id: any) {
    this.confirmService.confirm({
      message: '¿Estas seguro de querer eliminar este Item?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.deletesubcategory(id).subscribe({
          next: (data) => {
            location.reload();
          },
          error: (err) => {

          },
        });
      },
    });
  }

  //Clasifications
  getClasificaciones() {
    this.productService.getClasification().subscribe({
      next: (data) => {
        this.clasificaciones = data;
      },
      error: (err) => {

      },
    });
  }

  deleteClasification(id: any) {
    this.confirmService.confirm({
      message: '¿Estas seguro de querer eliminar este Item?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.deleteClasification(id).subscribe({
          next: (data) => {

            location.reload();
          },
          error: (err) => {

          },
        });
      },
    });
  }

  //BRANDS
  getMarcas() {
    this.productService.getBrands().subscribe({
      next: (data) => {
        this.marcas = data;
      },
      error: (err) => {

      },
    });
  }

  deleteBrand(id: any) {
    this.confirmService.confirm({
      message: '¿Estas seguro de querer eliminar este Item?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.deleteBrand(id).subscribe({
          next: (data) => {

            location.reload();
          },
          error: (err) => {

          },
        });
      },
    });
  }
}
