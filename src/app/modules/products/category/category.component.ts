import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductsModel, ProductWeigth } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private data$:Observable<any> = new Observable<any>();
  urlTree:any;
  idProduct!:number;

  sortOptions: SelectItem[] = [];
  sortKey:string = '';
  sortField:string = '';
  sortOrder:number = 0;

  products:ProductsModel[] = [];
  dog:ProductsModel[] = [];
  cat:ProductsModel[] = [];

  categories:CategoriesModels[] = [];
  subcategories:any = [];
  tab:any = [];
  categoriesSelect:number = 1;
  subcategoriesSelect:number = 1;
  responsiveOptions:any = [];

  weight:ProductWeigth[] = [];
  selectWeight:ProductWeigth[] = [];

  val:number = 1;

  category:any[] = [];
  categorySelect:any;

  constructor(private productsService:ProductService,
    private primengConfig:PrimeNGConfig,
    private router:Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.weight = [
      {name: '4KG', code: 4},
      {name: '8KG', code: 8}
    ]

    this.tab = [
      {name: 'Perro', code: 1, icon:'./../../../../assets/dog-category.png'},
      {name: 'Gato', code: 2, icon:'./../../../../assets/cat-category.png'}
    ];

    this.category = [
      {name: 'Collares', code: '1'},
      {name: 'Pecheras', code: '2'},
      {name: 'Bozales', code: '3'},
      {name: 'Camas', code: '4'},
      {name: 'Comedores', code: '5'},
      {name: 'Bebederos', code: '6'},
      {name: 'Cargadores', code: '7'},
      {name: 'Huacales', code: '8'}
    ];

    this.getCategories();
    this.getSubCategories();
    this.getProduts();

    if(this.categoriesSelect == 1){
      this.products = this.dog
    }else{
      this.products = this.cat
    }
  }

  getProduts(){
    this.productsService.getProducts().subscribe({
      next: (ok) => {
        this.products  = ok
        this.products.forEach(el => {
          if(el.brandId == 1){
            this.dog.push(el);
          }else{
            this.cat.push(el)
          }
        })
      },error: (err) => {}
    });
  }

  getCategories(){
    this.productsService.getCategories().subscribe({
      next: (ok) => {
        this.categories  = ok
        /* this.categories.forEach(el => {
          this.tab.push({name: el.name, code: el.id})
        }); */
      },error: (err) => {}
    });
  }

  getSubCategories(){
    this.productsService.getSubcategories().subscribe({
      next: (ok) => {
        ok.forEach(el => {
          this.subcategories.push({ name:el.name, code:el.id})
        });
        this.subcategories = ok
        console.log(ok)
      },
      error: (err) => {}
    });
  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  changeProducts(){
    if(this.categoriesSelect == 1){
      this.products = this.dog
    }else{
      this.products = this.cat
    }
  }

  handleClick(event:Event) {
    console.log(event)
    if(this.categoriesSelect == 1){
      this.products = this.dog
    }else{
      this.products = this.cat
    }
  }

}
