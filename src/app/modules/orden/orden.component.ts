import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from '../services/cruds/api-cruds.service';
import { UsersService } from '../services/users/users.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css'],
  providers: [MessageService],
})
export class OrdenComponent implements OnInit {
  //arrays de opciones dropdown
  direcciones: Array<any> = [];
  options: Array<any> = [];
  metodoPago: Array<any> = [];

  //Focus dropdown
  focus: any;
  focusDirecciones: any;
  focusPagos: any;
  items: any;
  payMethods: any;
  pay: any;
  total: any = 0;
  entrega: number = 10000;

  direccion: any;
  userId: any;
  products: any = [];

  constructor(
    private api: ApiCrudService,
    private userApi: UsersService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getPayMetodh();
    this.getProductsCart();
    this.items.map((item: any) => {
      this.total = this.total + Number(item.pSelect.price1) * Number(item.val);
    });
    this.total = this.total + this.entrega;

    this.getinfo();
  }

  getProductsCart() {
    if (localStorage.getItem('cart')) {
      const cart = localStorage.getItem('cart');
      this.items = JSON.parse(cart!);
      this.items.forEach((element: any) => {
        this.products.push({
          presentationProductCode: element.pSelect.code,
          amount: element.val,
        });
      });
    }else window.location.href = "/products"
  }

  getPayMetodh() {
    this.api.getCruds('v1/store/payMethods').subscribe({
      next: (res) => {
        console.log(res);
        this.payMethods = res;
        this.pay = res[0].id;
      },
    });
  }

  getinfo() {
    this.userApi.getClientToken().subscribe({
      next: (res) => {
        this.userId = res.id;
      },
      error: (err) => {
        localStorage.removeItem("token");
        window.location.href = '/login';
      },
    });
  }

  //Enviar pago
  handlePurchase() {
    const body = {
      customerId: this.userId,
      address: this.direccion,
      paymentMethodId: this.pay,
      items: this.products,
    };
    this.userApi.postPay(body).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: res,
        });
        setTimeout(() => {
          localStorage.removeItem("cart")
          window.location.href = "/products"
        }, 1000);
      }, error: ()=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salió mal :(',
        });
      }
    });
  }
}
