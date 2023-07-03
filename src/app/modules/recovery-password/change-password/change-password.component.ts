import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [MessageService]
})
export class ChangePasswordComponent implements OnInit {
  payload: any;

  formChangePass!: FormGroup;
  constructor( private service: UsersService, private _route: ActivatedRoute, public messageService: MessageService, fromBuilder: FormBuilder ) {
    this.formChangePass = fromBuilder.group({
      password_1: ['', Validators.required],
      password_2: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe({
      next: (data)=> {
        this.payload = data;
      }, error: (err)=> {}
    })
  }

  changePass(){
    if (this.formChangePass.value.password_1 == this.formChangePass.value.password_2){
      let params = {payload: this.payload.payload, password: this.formChangePass.value.password_1}
      this.service.postChangePass(params).subscribe({
        next: (data)=> {
        }, error: (err)=> {
          if (err.error.message === 'Token expired, please try again'){
            this.showErrorToken();
          }
        }
      })
    }else{
      this.showErrorPass();
    }
  }

  showErrorPass(){
    this.messageService.add({severity:'error', summary: 'Error', detail: '¡La contraseña no coincide!'});
  }

  showErrorToken(){
    this.messageService.add({severity:'error', summary: 'Error', detail: '¡El token expiró!'});
  }

  showSuccess(){
    this.messageService.add({severity:'success', summary: 'Success', detail: '¡Se cambió la contraseña correctamente!'});
  }
}
