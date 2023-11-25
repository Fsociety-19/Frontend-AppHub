import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token.service';
@Injectable({
  providedIn: 'root'
})
export class ApplointmentsService {
  headers = new HttpHeaders()

  constructor(private http: HttpClient, private token:TokenService) {


  }
  private url=environment.API_URL;



  create(body:any):Observable<any>{
    return this.http.post<any>(`${this.url}create/appointment`,body,{
      headers:this.headers.append('Authorization', 'Bearer ' + this.token.getToken()),
    })
  }
  getApplointMents():Observable<any>{
    return this.http.get<any>(`${this.url}${'get/Appointments'}`,{
      headers: this.headers.append('Authorization', 'Bearer ' + this.token.getToken())
    })
  }
  getApplointMentsByStaff():Observable<any>{
    return this.http.get<any>(`${this.url}${'get/AppointmentsbyStaff'}`,{
      headers: this.headers.append('Authorization', 'Bearer ' + this.token.getToken())
    })
  }

  getApplointMent(params:any):Observable<any>{
    return this.http.get<any>(`${this.url}getOne/Appointment`,{
      headers: this.headers.append('Authorization', 'Bearer ' + this.token.getToken()),
      params:params
    })
  }
  getAdmins():Observable<any>{
    return this.http.get<any>(`${this.url}get/Admins`,{
      headers: this.headers.append('Authorization', 'Bearer ' + this.token.getToken()),
    })
  }

  getStatus():Observable<any>{
    return this.http.get<any>(`${this.url}get/status`,{
      headers: this.headers.append('Authorization', 'Bearer ' + this.token.getToken()),
    })
  }

  update(id:number,body:any):Observable<any>{
    return this.http.patch<any>(`${this.url}update/AppointMent`,body,{
      headers: this.headers.append('Authorization', 'Bearer ' + this.token.getToken()),
      params:{id:id}
    })
  }
}
