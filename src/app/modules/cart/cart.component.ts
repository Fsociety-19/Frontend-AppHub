import { Component, OnInit } from '@angular/core';
import { CartI } from '../../Models/cart/cart.interface';
import { PrimeIcons } from 'primeng/api';
import { UsersService } from '../../services/users/users.service';
import {
  CartModels,
  ProductsModel,
} from 'src/app/Models/produts/productsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsCart: ProductsModel[] = [];
  items: any = [];
  subtotal: number = 0;
  bloquear: boolean = false;
  constructor(private cartService: UsersService, private router: Router) {}

  ngOnInit(): void {
    // this.productsCart = this.cartService.getCart();
    // this.productsCart.forEach(item=> {
    //   this.items.push({presentationProductCode: item.pSelect.code, amount: item.val})
    // })
    this.getProductsCart();
    this.sumaSubtotal();
  }

  setOrder() {
    if (this.items.length != 0) {
      localStorage.setItem('myArray', JSON.stringify(this.items));
      this.router.navigate(['orden']);
    } else {
      console.log('ingrese productos al carrito');
    }
  }

  sumaSubtotal() {
    let suma = 0;
    this.items.forEach((item: any) => {
      suma = suma + (Number(item.pSelect.price1) * Number(item.val));
    });
    this.subtotal = suma;
  }

  getProductsCart() {
    if (localStorage.getItem('cart')) {
      const cart = localStorage.getItem('cart');
      this.items = JSON.parse(cart!);
      console.log(this.items);
    }
  }

  deleteProduct(product: any) {
    this.items = this.items.filter(
      (el: any) =>
        el.id !== product.id || el.pSelect.code !== product.pSelect.code
    );
    let suma = 0;
    this.items.forEach((item:any)=> {
      suma = suma + (Number(item.pSelect.price1) * Number(item.val));
    });
    this.subtotal = suma;
    if (suma == 0) {
      this.bloquear = true;
      localStorage.removeItem("cart")
    }else localStorage.setItem('cart', JSON.stringify(this.items));

  }

  addMore(item: any, product: any) {
    if (localStorage.getItem('cart')) {
      let suma = 0;
      this.items.map((el: any) => {
        suma = suma + (Number(el.pSelect.price1) * Number(el.val));
      });
      this.subtotal = suma;
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
