import { Component, OnInit } from '@angular/core';
import { ApplointmentsService } from '../../../services/appointments/applointments.service';
@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {

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
    this.service.getApplointMentsByStaff().subscribe({
      next: (data) => {
        this.Apps = data;
        this.loading = false;
        console.log(data);

      },
      error: (err) => {
        console.log(err);
        this.loading=false;
      },
    });
  }
}
