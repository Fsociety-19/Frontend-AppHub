import { Component, OnInit } from '@angular/core';
import { LoginI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  errorStatus: boolean = false;
  errorMsj!: string;
  status: string='init';

  checked: boolean = false;

  formLogin!: FormGroup;
  constructor(
    private userService: UsersService,
    private router: Router,
    formBuilder: FormBuilder,
    public messageService: MessageService,
    private authService: AuthService
  ) {
    this.formLogin = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  doLogin() {
    this.status='loading';
    this.authService
      .login(this.formLogin.value.username, this.formLogin.value.password)
      .subscribe({
        next: (data) => {
          this.status='success';
          if (data.rol==1){
              //this.router.navigate(['/admin'])
              window.location.href = '/admin';
          }else if(data.rol==2){

          }else if(data.rol=3){
            this.router.navigate(['/create-appointment'])
          }
        },
        error: (err) => {

          this.status='failed';
          switch (err.status) {
            case 401:
              this.show401();
              break;
            case 404:
              this.show404();
              break;
            case 403:
              this.showError();
              break;
            case 400:
              this.show400();
              break;
            case 422:
              this.show422();
              break;
            default:
              this.showError();
          }
        },
      });
  }
  onLogin() {
    let form: LoginI = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    };
    this.userService.login(form).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token_jwt);
        this.checked = true;
        this.showLogin();
        window.location.href = '';
      },
      error: (err) => {
        console.log(err)
        switch (err.status) {

          case 401:
            this.show401();
            break;
          case 404:
            this.show404();
            break;
          case 403:
            this.showError();
            break;
          case 400:
            this.show400();
            break;
          case 422:
            this.show422();
            break;
          default:
            this.showError();
        }
        // if (err.status ===  401){
        //   this.show401()
        // }else{
        // this.showError();
        // }
      },
    });
  }

  //alertas

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Contraseña y/o email invalido(s)',
    });
  }

  show401() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Datos incorrectos',
    });
  }

  show404() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Usuario no existe',
    });
  }

  show403() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail:
        'Tiene un token vigente, debe revisar su correo para la activación ',
    });
  }

  show400() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Token vencido, se le ha enviado uno nuevo al correo',
    });
  }

  show422() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Token no válido o tiene un error',
    });
  }

  showLogin() {
    this.messageService.add({
      severity: 'success',
      summary: 'success',
      detail: 'Inicio de sesion con exito!',
    });
  }
}
