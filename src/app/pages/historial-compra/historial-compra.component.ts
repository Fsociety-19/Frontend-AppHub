import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrls: ['./historial-compra.component.css']
})
export class HistorialCompraComponent implements OnInit {
  ordenes: Array<any> = []
  constructor() { }

  ngOnInit(): void {
    this.ordenes.push(
      {
        numero: '100100',
        cliente: 'Krlos cervantes',
        valor: '200.000',
        estado: 'Activo',
      },
      {
        numero: '100100',
        cliente: 'Krlos cervantes',
        valor: '200.000',
        estado: 'Activo',
      },
      {
        numero: '100100',
        cliente: 'Krlos cervantes',
        valor: '200.000',
        estado: 'Activo',
      },
      {
        numero: '100100',
        cliente: 'Krlos cervantes',
        valor: '200.000',
        estado: 'Activo',
      },
      {
        numero: '100100',
        cliente: 'Krlos cervantes',
        valor: '200.000',
        estado: 'Activo',
      },
      {
        numero: '100100',
        cliente: 'Krlos cervantes',
        valor: '200.000',
        estado: 'Activo',
      }
    );
  }

}
