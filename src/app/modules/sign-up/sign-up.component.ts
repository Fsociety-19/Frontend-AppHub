import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit {
  formRegistro: FormGroup;
  res: any;
  validPhone: any = /^\d{10}$/
  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private _router: ActivatedRoute,
    private userService: UsersService,
    public messageService: MessageService
  ) {
    this.formRegistro = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(this.validPhone)]],
    });
  }

  ngOnInit(): void {
    this._router.queryParams.subscribe({
      next: (data) => {
        this.res = data;
      },
    });
  }

  registro() {
    let form: RegisterI = {
      email: this.res.email,
      password: this.res.password,
      role: 'customer',
      customer: {
        name: this.formRegistro.value.name,
        lastName: this.formRegistro.value.lastName,
        phone: this.formRegistro.value.phone,
      }
    };
    this.userService.register(form).subscribe({
      next: (data) => {
        this.showSucces();
      },
      error: (err) => {
        if (err.statusText == 'Conflict') {
          this.showErrorRegisEmail();
        } else if (err.statusText == 'Bad Request') {
          this.showErrorEmail();
        } else {
          console.log(err);
        }
      },
    });
  }

  showSucces(){
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Usuario registrado, Se envio un correo de verificacion'});
  }

  showErrorEmail(){
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Email invalido'});
  }

  showErrorRegisEmail(){
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Email ya ha sido registrado, revise su correo'});
  }
}
