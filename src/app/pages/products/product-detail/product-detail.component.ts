import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  ProductsModel,
  ProductWeigth,
} from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../../services/products/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [MessageService],
})
export class ProductDetailComponent implements OnInit {
  urlTree: any;
  idProduct!: number;

  images: any = [];
  principalImage: string = '';
  product!: ProductsModel;
  name: string = '';
  desc: string = '';

  weight: ProductWeigth[] = [];
  selectWeight: ProductWeigth[] = [];
  val: number = 1;

  responsiveOptions: any[] = [];

  constructor(
    private productsService: ProductService,
    public messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let URLsearch = `${window.location.href}`;
    let url = URLsearch.split('/');
    let n = url.length;

    this.idProduct = Number(url[n - 1]);

    this.getProduct();
    this.weight = [
      { name: '4KG', code: 4 },
      { name: '8KG', code: 8 },
      { name: '12KG', code: 12 },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '960px',
        numVisible: 4,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }

  getProduct() {
    this.productsService.getProductById(this.idProduct).subscribe({
      next: (ok) => {
        this.product = ok;
        this.name = ok.name;
        this.desc = ok.description;
        this.images = ok.images;
        const select = this.product.presentations.filter(
          (res: any) => res.code === this.product.pSelect
        );
        this.product.pSelect = select[0];
        this.images.unshift({
          url: ok.image,
        });
      },
      error: (err) => {},
    });
  }

  //añadir al carrito
  addToCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([this.product]));
      this.showAdd();
    } else {
      const cart = localStorage.getItem('cart');
      let array = JSON.parse(cart!);
      const producto = array.find(
        (el: any) =>
          this.product.id === el.id &&
          this.product.pSelect.code === el.pSelect.code
      );
      if (producto) {
        array.forEach((el: any) => {
          if (this.product.pSelect.code === el.pSelect.code) {
            el.val = el.val + this.product.val;
          }
        });
      } else array.push(this.product);
      localStorage.setItem('cart', JSON.stringify(array));
      this.showAdd();
    }
  }

  showAdd() {
    this.messageService.add({
      severity: 'success',
      summary: 'Agregado',
      detail: '¡Se agregó al carrito!',
    });
  }
}
