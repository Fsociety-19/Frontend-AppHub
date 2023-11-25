import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplointmentsService } from 'src/app/services/appointments/applointments.service';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';

import {
  CategoriesModels,
  ClasificationModel,
} from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../../../services/products/product.service';
import { UsersService } from '../../../../services/users/users.service';
import { ApiCrudService } from '../../../../services/cruds/api-cruds.service';

@Component({
  selector: 'app-applointment',
  templateUrl: './applointment.component.html',
  styleUrls: ['./applointment.component.css'],
  providers: [MessageService],
})
export class ApplointmentComponent implements OnInit {
  idApp!: any;
  Appointment: any = [];
  admin: any = [];
  status: any = [];
  name!: string;
  description!: string;

  imagenes: any = [];

  //Forrmulario
  formAppointment!: FormGroup;

  product: any;

  marcas: any = [];
  categoria: any = [];
  subcategoria: any = [];
  clasificacion: any = [];

  switch: boolean = false;
  imageSelect: any = '';
  image: any;
  newImage: any;
  //variable heredad
  constructor(
    private productService: ProductService,
    fromBuilder: FormBuilder,
    public messageService: MessageService,
    private route: ActivatedRoute,
    private service: ApplointmentsService
  ) {
    this.formAppointment = fromBuilder.group({
      id: [0],
      hour: [0],
      date: [''],
      nameStudent: [''],
      detail: [''],
      reason: [''],
      adminStaff: [0],
      idStudent: [0],
      status: [''],
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idApp = params.get('id');
    });
    this.getAdmins();
    this.getStatus();
    this.getAppointment(this.idApp);
  }

  getAppointment(idApp: any) {
    this.service.getApplointMent({ id: idApp }).subscribe({
      next: (data) => {
        this.Appointment = data[0];
        this.status.map((item: any) => {
          if (this.Appointment.status == item.code) {
            this.formAppointment.patchValue({ status: item.code});
          }
        });
        this.admin.map((item: any) => {
          if (this.Appointment.idAdmin === item.code) {
            this.formAppointment.patchValue({ adminStaff: item.code });
          }
        });
        this.formAppointment.patchValue({
          id: this.Appointment.id,
          hour: this.Appointment.hour,
          date: this.Appointment.date,
          nameStudent:
            this.Appointment.student.name +
            ' ' +
            this.Appointment.student.lastName,
          detail: this.Appointment.detail,
          reason: this.Appointment.reason,
          idStudent: this.Appointment.student.dni,
        });
      },
      error: (err) => {},
    });
  }
  getAdmins() {
    this.service.getAdmins().subscribe({
      next: (data) => {
        data.forEach((item: any) => {
          this.admin.push({ name: item.name, code: item.id });
        });
      },
    });
  }
  getStatus() {
    this.service.getStatus().subscribe({
      next: (data) => {
        data.forEach((item: any) => {
          this.status.push({ name: item.name, code: item.id });
        });
      },
    });
  }
  updateAppointment() {
    const body = {
      idAdmin: this.formAppointment.value.adminStaff,
      detail: this.formAppointment.value.detail,
      status: this.formAppointment.value.status,
    };
    this.service.update( this.formAppointment.value.id, body).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Actualizado con exito!',
        });
        this.goBack();
      },
      error: (err) => {
        console.log(err.error)
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salió mal :(',
        });
      },
    });
  }
  // ir atras
  goBack() {
    location.href = '/admin';
  }
}
