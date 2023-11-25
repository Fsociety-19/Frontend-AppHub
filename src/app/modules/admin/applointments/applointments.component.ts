import { Component, OnInit } from '@angular/core';
import { ApplointmentsService } from '../../../services/appointments/applointments.service';
@Component({
  selector: 'app-applointments',
  templateUrl: './applointments.component.html',
  styleUrls: ['./applointments.component.css'],
})
export class ApplointmentsComponent implements OnInit {

  apps: Array<any> = [];
  options: Array<any> = [];
  focus: any;
  responsiveOptions: any;
  titles: Array<any> = [
    'NUMERO',
    'MOTIVO',
    'ADMIN',
    'HORA',
    'FECHA',
    'ESTADO',
    'DETALLES',
    'VER MÁS',
  ];
  New: any = 'new';
  loading: boolean = true;
  filterApp = '';

  //Variables de api
  Apps: any = [];
  constructor(
    private service:ApplointmentsService
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.service.getApplointMents().subscribe({
      next: (data) => {
        this.Apps = data;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading=false;
      },
    });
  }


}
