import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { debounceTime, fromEvent, map } from 'rxjs';
import { BarndsModels, CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../services/products/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [PrimeIcons],
})
export class HeaderComponent implements OnInit {
  products: ProductsModel[] = [];
  display: any;

  categories: CategoriesModels[] = [];
  subcategories: any = [];
  user: any;
  userSelect: number = 1;

  text: string = '';
  results: string[] = [];

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

  constructor(
    private productsService: ProductService,
    private userService: UsersService,
    private router: Router
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

    this.getProduts();
  }

  //metodos

  getSesion() {
    this.userService.getClientToken().subscribe((res) =>{});
  }

  logOut() {
    this.userService.deleteToken();
    location.reload();
  }

  show() {}

  getProduts() {
    this.productsService.getProducts().subscribe({
      next: (ok) => {
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
      },
      error: (err) => {},
    });
  }

  searchBar(like: any) {
    this.userService.postSearchBar(like).subscribe({
      next: (ok) => {
      },
      error: (err) => {
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
    this.results = filtered;
    }

  select(event: any) {
    this.router.navigate([`/products`], { queryParams: { id: event.id } });
  }
}
