import { Component, OnInit , HostBinding, Renderer2, ElementRef, Input, Output} from '@angular/core';
import { MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import {
  ProductsLocalModel,
  ProductsModel,
  ProductWeigth,
} from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../../services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService],
})
export class ProductsComponent implements OnInit {
  @Input() pet?:string | null
  @Input() clasf?:string | null
  @Input() brand?:string | null
  @Input() price?:string | null
  @Output() productDetail?:number | undefined
  sortField: string = '';
  sortOrder: number = 0;
  productFilter: any = [];
  products: any = [];
  constructor(
    private productsService: ProductService,
    private primengConfig: PrimeNGConfig,
    public messageService: MessageService,
    private renderer: Renderer2, private elementRef: ElementRef
  ) {
    // llamado a api
    this.getProduts();
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

 //get products
 getProduts() {
  console.error("data", this.pet)
  this.productsService.getProducts(this.pet,this.clasf,this.brand).subscribe({
    next: (ok) => {
      this.products = ok;
      this.products.forEach((el: any) => {
        const select = el.presentations.filter(
          (res: any) => res.code === el.pSelect
        );
        el.pSelect = select[0];
      });
      this.productFilter = this.products;
    },
    error: (err) => {
    },
  });
}


/*  //filtro
  filtroBrands() {
    if (this.brandsSelect === 0){
      this.productFilter = this.products
    } else{
      this.productFilter = this.products.filter(
        (el: any) => el.brandId === this.brandsSelect
      );
    }
  }
*/


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



  //*********************************************************************************************************** */


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
