import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(token: string) {
    setCookie('token-avma',token,{expires:365,path:'/'})
    return token;
  }

  getToken(){
    const token = getCookie('token-avma')
    return token;
  }
  removeToken(){
    removeCookie('token-avma')
  }
}
