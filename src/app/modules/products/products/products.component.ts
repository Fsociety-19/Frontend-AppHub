import { Component, OnInit , HostBinding, Renderer2, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import {
  CategoriesModels,
  SubcategoriesModel,
} from 'src/app/Models/CategoriesModel';
import { GeneralResponse } from 'src/app/Models/general';
import {
  ProductsLocalModel,
  ProductsModel,
  ProductWeigth,
} from 'src/app/Models/produts/productsModel';
import { UsersService } from '../../../services/users/users.service';
import { ProductService } from '../../../services/products/product.service';
import { ApiCrudService } from '../../../services/cruds/api-cruds.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService],
})
export class ProductsComponent implements OnInit {
  @HostBinding('style.outline') outline = 'none';
  private data$: Observable<any> = new Observable<any>();
  urlTree: any;
  idProduct!: number;

  sortOptions: SelectItem[] = [];
  sortKey: string = '';
  sortField: string = '';
  sortOrder: number = 0;

  productFilter: any = [];
  products: any = [];

  categories: CategoriesModels[] = [];
  clasification: Array<any> = [];
  subcategories: any = [];
  brands: Array<any> = [];

  categoriesSelect: number = 0;
  subcategoriesSelect: number = 0;
  clasificationSelect: number = 0;
  brandsSelect: number = 0;

  constructor(
    private productsService: ProductService,
    private primengConfig: PrimeNGConfig,
    public messageService: MessageService,
    private _router: ActivatedRoute,
    private api: ApiCrudService,
    private renderer: Renderer2, private elementRef: ElementRef
  ) {
    // llamado a api
    this.getProduts();
    this.getCategories();
    this.getBrands();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  ngAfterViewInit() {
    const element = this.elementRef.nativeElement.querySelector('.p-paginator .p-paginator-next');
    this.renderer.listen(element, 'click', () => {
      this.scrollToTop();
    });
    const element2 = this.elementRef.nativeElement.querySelector('.p-paginator .p-paginator-prev');
    this.renderer.listen(element2, 'click', () => {
      this.scrollToTop();
    });
    const element3 = this.elementRef.nativeElement.querySelector('.p-paginator .p-paginator-pages');
    this.renderer.listen(element3, 'click', () => {
      this.scrollToTop();
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  //filtrar
  filtroQuery() {
    this._router.queryParams.subscribe({
      next: (ok) => {
        if (ok && ok['brand']) {
          this.brandsSelect = Number(ok['brand']);
          this.filtroBrands();
        }
        if (ok && ok['category']) {
          this.categoriesSelect = Number(ok['category']);
          this.getSubcategorias();
        }
      },
    });
  }

  //filtro brand y clasificacion
  filtroBrandClas(){
    let arrayBrand = this.products
    let arrayClas = this.products
    if (this.brandsSelect === 0){
      arrayBrand = arrayClas
      this.productFilter = arrayBrand
    } else{
      arrayBrand = arrayClas.filter((el: any)=> el.brandId === this.brandsSelect)
      this.productFilter = arrayBrand
    }

    if (this.clasificationSelect === 0){
      arrayClas = arrayBrand
      this.productFilter = arrayClas
    } else{
      arrayClas = arrayBrand.filter((el: any)=> el.clasificationId === this.clasificationSelect)
      this.productFilter = arrayClas
    }
  }

  //filtro
  filtroBrands() {
    if (this.brandsSelect === 0){
      this.productFilter = this.products
    } else{
      this.productFilter = this.products.filter(
        (el: any) => el.brandId === this.brandsSelect
      );
    }
  }

  //subcategorias de categorias
  getSubcategorias() {
    this.subcategories = [];
    this.productsService.getSubcategories().subscribe({
      next: (res) => {
        res.forEach((el) => {
          if (el.categorieId === this.categoriesSelect) {
            this.subcategories.push(el);
          }
        });
        this.subcategoriesSelect = 0;
      },
    });
  }

  //Clasificacion filtro
  getClasificacion() {
    this.clasification = [];
    this.productsService.getClasification().subscribe({
      next: (res) => {
        res.forEach((el) => {
          if (el.subCategorieId === this.subcategoriesSelect) {
            this.clasification.push(el);
          }
        });
        this.clasificationSelect = 0;
      },
    });
  }

  //añadir al carrito
  addToCart(product: ProductsModel) {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([product]));
      this.showAdd();
    } else {
      const cart = localStorage.getItem('cart');
      let array = JSON.parse(cart!);
      const producto = array.find(
        (el: any) =>
          product.id === el.id && product.pSelect.code === el.pSelect.code
      );
      if (producto) {
        array.forEach((el: any) => {
          if (product.pSelect.code === el.pSelect.code) {

            el.val = el.val + product.val;
          }
        });
      } else array.push(product);
      localStorage.setItem('cart', JSON.stringify(array));
      this.showAdd();
    }
  }

  //get products
  getProduts() {
    this.productsService.getProducts().subscribe({
      next: (ok) => {
        this.products = ok;
        this.products.forEach((el: any) => {
          const select = el.presentations.filter(
            (res: any) => res.code === el.pSelect
          );
          el.pSelect = select[0];
        });
        this.productFilter = this.products;
        this.filtroQuery();
      },
      error: (err) => {
        console.log(err.status)
      },
    });
  }
  //Cargar categorias
  getCategories() {
    this.productsService.getCategories().subscribe({
      next: (ok) => {
        this.categories = ok;
      },
      error: (err) => {},
    });
  }

  //cargar marcas
  getBrands() {
    this.productsService.getBrands().subscribe({
      next: (ok) => {
        this.brands.push({name: "Todas las marcas", code: 0})
        ok.map((item: any) => {
          this.brands.push({ name: item.name, code: item.id });
        });
      },
      error: (err) => {},
    });
  }
  //*********************************************************************************************************** */

  onSortChange(event: any) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  //alertas
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Escoja una presentacion',
    });
  }

  showAdd() {
    this.messageService.add({
      severity: 'success',
      summary: 'Agregado',
      detail: '¡Se agregó al carrito!',
    });
  }
}
