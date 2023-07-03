import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users/users.service';

@Component({
  selector: 'app-crud-ordenes',
  templateUrl: './crud-ordenes.component.html',
  styleUrls: ['./crud-ordenes.component.css'],
})
export class CrudOrdenesComponent implements OnInit {
  products: Array<any> = [];
  titles: Array<any> = [
    'No',
    'Cliente',
    'Valor',
    'Detalle',
    'Estado'
  ];

  filterOrden = '';
  constructor( private userservice: UsersService) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    this.products.push(
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'hola', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'soy un dato', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' },
      { numero: '1', name: 'nombre', valor: '10.000', estado: 'Activo' }
    );
    this.getOrders();
  }

  getOrders(){
    this.userservice.getOrder().subscribe({
      next: (data) => {
      }, error: (err) =>{}
    })
  }
}
