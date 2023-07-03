import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
  providers: [MessageService]
})
export class RecoveryPasswordComponent implements OnInit {
  formForgotPass!: FormGroup;

  constructor( private service: UsersService, public messageService: MessageService, formBuilder: FormBuilder ) {
    this.formForgotPass = formBuilder.group({
      email: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  recovery(){
    let Email = {email: this.formForgotPass.value.email}
    this.service.recoveryPassword(Email).subscribe({
      next: (data) => {
        this.showSuccess();
      }, error: (err)=> {
        if(err.status === 404){
          this.showError();
        }
      }
    })
  }

  showSuccess(){
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Se envio un email a: ' + this.formForgotPass.value.email});
  }

  showError(){
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Correo no registrado'});
  }

}
