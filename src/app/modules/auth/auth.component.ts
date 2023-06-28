import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../services/users/users.service'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  queryparams: any;
  message: string = '';
  constructor( private _route:ActivatedRoute, private authService: UsersService ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe({
      next: (ok) => {
        this.queryparams = ok;
      }
    })
    console.log(this.queryparams)

    this.Auth();
  }

  Auth(){
    this.authService.auth(this.queryparams).subscribe({
      next: (ok)=> {
        console.log(ok)
        if (ok.messagge === 'There was an error with your token'){
          this.message = 'UPS! Su token es invalido';
        }else if (ok.messagge === 'Esta cuenta ya esta verificada'){
          this.message = '¡Esta cuenta ya ha sido verificada, inicia sesion!';
        }else{
          this.message = '!Tu cuenta ha sido verificada con exito!';
        }
      }, error: (err)=> {
        if (err.status === 400){
          this.message = 'UPS! Su token está vencido';
        }
      }
    })
  }
}
