import { ClientsModel } from '../../../../Models/Clients.interface';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users/users.service';
import { ApiCrudService } from '../../../../services/cruds/api-cruds.service';

@Component({
  selector: 'app-cruds-clients',
  templateUrl: './cruds-clients.component.html',
  styleUrls: ['./cruds-clients.component.css']
})
export class CrudsClientsComponent implements OnInit {
  products: Array<any> = [];
  Clients: ClientsModel[] = [];
  titles: Array<any> = ['ID', 'NOMBRE', 'APELLIDO', 'TELEFONO', 'EDITAR']

  filterClients = ''
  constructor(private userServices: UsersService, private api: ApiCrudService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    this.getClients();
  }

  getClients(){
    this.api.getCruds("v1/store/customers").subscribe({
      next: (data) => {
        this.Clients = data
        }, error: (err) => {}
    })
  }

}
