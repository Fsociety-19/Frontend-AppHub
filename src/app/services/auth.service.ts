import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { ResponseLogin } from '../Models/authentication/ResponseLogin';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.API_URL;
  constructor(private tokenService:TokenService,private http: HttpClient) { }

  login(username:string, password:string){
    const body={
      username,
      password
    }
    return this.http.post<ResponseLogin>(this.apiUrl + 'auth/login',body
   ).pipe(
      tap( response =>{
        this.tokenService.saveToken(response.token_jwt)
      })
    )
  }


}
