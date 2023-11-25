import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppointmentI } from 'src/app/Models/authentication/authmodel.interface';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {ApplointmentsService} from './../../../../services/appointments/applointments.service'
@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css'],
  providers: [MessageService]
})
export class CreateAppointmentComponent implements OnInit {
  formAppointment!: FormGroup;
  constructor(private service:ApplointmentsService,
    formBuilder: FormBuilder,
    public messageService: MessageService) {
      this.formAppointment = formBuilder.group({
        reason: ['', [Validators.required]],
        detail: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {}

  saveAPP(){
    const body:AppointmentI = {
      reason: this.formAppointment.value.reason,
      detail: this.formAppointment.value.detail,
    };
    this.service.create(body).subscribe({
      next:(data)=>{
        window.location.href = '';
      },
      error:(err)=>{

      }
    })
  }
}
