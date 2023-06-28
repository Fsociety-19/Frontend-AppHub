import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCrudService } from '../../../services/cruds/api-cruds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {
  focus: any;
  options: Array<any> = [];
  formClient: FormGroup
  validphone: any = /^\d{10}$/
  id: any;
  constructor(private fb: FormBuilder, private api: ApiCrudService, private route_:ActivatedRoute) {
    this.formClient = fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(this.validphone)]],
    })
  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    this.id = this.route_.snapshot.paramMap.get("id")
    console.log(this.id)
    this.getClient()
  }

  getClient(){
    this.api.getCrudsOneById("v1/store/customers", this.id).subscribe({
      next: (res)=> {
        console.log(res)
        this.formClient.setValue({
          name: res.customer.name,
          lastName: res.customer.lastName,
          phone: res.customer.phone
        })
      }
    })
  }

}
