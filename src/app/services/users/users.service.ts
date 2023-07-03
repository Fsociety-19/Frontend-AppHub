import { OrderModel } from '../../Models/order.interface';
import { ClientResponseModel } from '../../Models/Clients.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AuthI,
  LoginI,
  RegisterI,
} from 'src/app/Models/authentication/authmodel.interface';
import { environment } from 'src/environments/environment';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ProductsModel } from 'src/app/Models/produts/productsModel';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //headers
  headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token'));

  headersImg = new HttpHeaders()
    .append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  productCart: ProductsModel[] = [];
  constructor(private http: HttpClient) {
  }

  private readonly url = environment.api;

  login(form: LoginI): Observable<any> {
    return this.http.post<any>(this.url + '/v1/store/auth/login', form);
  }

  register(form: RegisterI): Observable<any> {
    let direccion = this.url + '/v1/store/users/new';
    return this.http.post<any>(direccion, form);
  }

  auth(query: any): Observable<any> {
    let direccion = this.url + +'/v1/store/users/confirm';

    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    const body = {};

    const params = new HttpParams()
      .append('payload', query.payload)
      .append('extendsI', query.extendsI);

    return this.http.post<any>(this.url + '/v1/store/users/confirm', body, {
      headers: headers,
      params: params
    });
  }

  postChangePass(params: {}):Observable<any>{
    return this.http.post<any>(this.url + '/v1/store/users/change-password', params)
  }

  //Get clients
  getClients(): Observable<ClientResponseModel> {
    return this.http.get<ClientResponseModel>(this.url + '/v1/store/users', {headers: this.headers});
  }

  getClientToken():Observable<any>{
    return this.http.get<any>(`${this.url}/v1/store/customers/info`, {headers: this.headers})
  }

  //get order
  getOrder(): Observable<OrderModel> {
    return this.http.get<OrderModel>(this.url + '/v1/store/purchaseOrders', {headers: this.headers});
  }

  getToken(){
    return localStorage.getItem('token')
  }

  deleteToken(){
    localStorage.removeItem('token')
  }

  recoveryPassword(email:{}):Observable<any>{
    return this.http.post<any>(this.url + '/v1/store/users/forgot-password', email)
  }

  setCart(product: ProductsModel){
    this.productCart.push(product)
  }

  getCart(){
    return this.productCart
  }

  //Serch products and filters

  postSearchBar(like: any):Observable<any>{
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const body = {};
    const params = new HttpParams()
      .append('like', like);
    return this.http.post<any>(this.url + '/v1/store/products/sear', body, {
      headers: headers,
      params: params
    })
  }

  //addImagesProducts
  postUploadImgProducts(body: FormData):Observable<any>{
    return this.http.post<any>(this.url + '/v1/store/products/AddImage', body, {
      headers: this.headersImg
    })
  }

  //deleteImagesProducts
  postRemoveImagesProducts(params: any):Observable<AnyCatcher>{
    return this.http.post<any>(`${this.url}/v1/store/products/removeImage`, params, {
      headers: this.headersImg
    })
  }

  //detalle del usuario
  getDetailCustomer():Observable<any>{
    return this.http.get<any>(`${this.url}/v1/store/customers/info`, {
      headers: this.headers
    })
  }

  //pagos
  postPay(body: any):Observable<any>{
    return this.http.post<any>(`${this.url}/v1/store/purchaseOrders/new`, body, {
      headers: this.headersImg
    })
  }
}
