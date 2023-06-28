import { UsersService } from './../../services/users/users.service';
import { ProductService } from './../../products/service/product.service';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import {
  CategoriesModels,
  BarndsModels,
} from './../../../Models/CategoriesModel';
import { ProductsModel } from './../../../Models/produts/productsModel';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { ApiCrudService } from '../../services/cruds/api-cruds.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.css'],
})
export class HeaderTestComponent implements OnInit {
  @ViewChild('searchI', { static: true }) searchI!: ElementRef;
  @ViewChild('searchR', { static: true }) searchR!: ElementRef;
  products: ProductsModel[] = [];
  display: any;

  categories: CategoriesModels[] = [];
  subcategories: any = [];
  user: any;
  userSelect: number = 1;

  text: string = '';

  items: MegaMenuItem[] = [];
  info: Array<any> = [];

  checked: boolean = false;

  checkDropMarcas: boolean = false;
  checkDropcategporias: boolean = false;

  checkAdmin: boolean = false;

  productsTest: Array<any> = [
    { name: 'colo', id: 1 },
    { name: 'productor', id: 1 },
    { name: 'productor', id: 1 },
    { name: 'productor', id: 1 },
    { name: 'productor', id: 1 },
  ];
  selectProduct: any;

  // categories!: CategoriesModels[];
  marcas: BarndsModels[] = [];

  searchValue = '';
  showResults = false;
  results: any = [];
  matchingResults: string[] = [];

  isLoading: boolean = false;
  messageError: boolean = false;
  isInputFocused: boolean = false;
  checkDropCuenta: boolean =  false;

  constructor(
    private productsService: ProductService,
    private userService: UsersService,
    private api: ApiCrudService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.info = ['Trabaja con nosotros', 'Contacto'];
    this.getBrands();
    this.getCategories();

    const token = localStorage.getItem('token');
    if (token) {
      this.checked = true;
      this.getSesion();
    }

    fromEvent<Event>(this.searchI.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          const evento = (event.target as HTMLInputElement).value;
          return evento;
        }),
        debounceTime(700)
      )
      .subscribe((data: string) => {
        this.autocomplete();
      });
  }

  //autocomplete
  autocomplete() {
    this.isLoading = true;
    this.messageError = false;
    this.results = [];
    this.api.postSearchBar(this.searchValue).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.length >= 1) {
          this.results = res;
          this.messageError = false;
        } else {
          this.results = res;
          this.messageError = true;
        }
      },
      error: (err) => {
        this.isLoading = false;
        if (err.error.statusCode === 400) {
          this.results = [];
          this.messageError = true;
        }
      },
    });
  }

  responsiveBar(){
    setTimeout(() => {
      this.autocomplete()
    }, 500);
  }

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    setTimeout(() => {
      this.isInputFocused = false;
    }, 500);
  }

  //metodos
  getSesion() {
    this.userService.getClientToken().subscribe({
      next:(ok)=>{
      },
      error:(err)=>{
      }
    });
  }

  logOut() {
    this.userService.deleteToken();
    location.reload();
  }

  producto(id: any) {
    console.log('Hola');
    window.location.href = '/products/detail/' + id;
  }

  getProduts() {
    this.productsService.getProducts().subscribe({
      next: (ok) => {
        console.log(ok);
      },
      error: (err) => {},
    });
  }

  getCategories() {
    this.productsService.getCategories().subscribe({
      next: (ok) => {
        this.categories = ok;
      },
      error: (err) => {},
    });
  }

  getSubCategories() {
    this.productsService.getSubcategories().subscribe({
      next: (ok) => {
        ok.forEach((el) => {
          this.subcategories.push({ name: el.name, code: el.id });
        });
        this.subcategories = ok;
      },
      error: (err) => {},
    });
  }

  getBrands() {
    this.productsService.getBrands().subscribe({
      next: (data) => {
        this.marcas = data;
      },
      error: (err) => {},
    });
  }

  search(event: any) {
    this.productsService.getProductById(event.query).subscribe({
      next: () => {
        console.log('ok');
      },
      error: (err) => {},
    });
  }

  searchBar(like: any) {
    this.userService.postSearchBar(like).subscribe({
      next: (ok) => {
        console.log(ok);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //drops
  dropMarcas() {
    this.checkDropMarcas = !this.checkDropMarcas;
    if (this.checkDropMarcas)
      document.getElementById('brandIcon')!.style.transform = 'rotateX(180deg)';
    else
      document.getElementById('brandIcon')!.style.transform = 'rotateX(0deg)';
  }

  dropCuenta() {
    this.checkDropCuenta = !this.checkDropCuenta;
    if (this.checkDropCuenta)
      document.getElementById('cuentaIcon')!.style.transform = 'rotateX(180deg)';
    else
      document.getElementById('cuentaIcon')!.style.transform = 'rotateX(0deg)';
  }

  dropCategorias() {
    this.checkDropcategporias = !this.checkDropcategporias;
    if (this.checkDropcategporias)
      document.getElementById('categorieIcon')!.style.transform =
        'rotateX(180deg)';
    else
      document.getElementById('categorieIcon')!.style.transform =
        'rotateX(0deg)';
  }

  //searchBar filter

  filterCountry(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.productsTest.length; i++) {
      let Productos = this.productsTest[i];
      if (Productos.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(Productos);
      }
    }
    console.log(filtered);
    this.results = filtered;
    console.log(this.results);
  }

  select(event: any) {
    this.router.navigate([`/products`], { queryParams: { id: event.id } });
  }
}
