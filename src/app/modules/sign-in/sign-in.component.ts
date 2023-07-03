import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from 'src/app/services/users/users.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {

  formRegister!: FormGroup;
  constructor( private userservice: UsersService, formBuilider: FormBuilder, public messageService: MessageService, private router: Router) {
    this.formRegister = formBuilider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      condiciones: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  auth() {
    this.router.navigate(['sign-up'], { queryParams: {
      email: this.formRegister.value.email.toLowerCase(),
      password: this.formRegister.value.password
    }})
  }

}
