import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { productsCrudsI } from 'src/app/Models/Cruds/productsCrud.interface';


@Injectable({
  providedIn: 'root',
})
export class ApiCrudService {
  constructor(private http: HttpClient) {}

  private readonly url = environment.API_URL;
  headers = new HttpHeaders()
  .append('Content-Type', 'application/x-www-form-urlencoded')
  .append('Authorization', 'Bearer ' + localStorage.getItem('token'));

  headersRaw = new HttpHeaders()
  .append('Authorization', 'Bearer ' + localStorage.getItem('token'));

  getCruds(url: any):Observable<any>{
    return this.http.get<any>(`${this.url}/${url}`, {
      headers: this.headers
    })
  }

  getCrudsOneById(url: any, id: any):Observable<any>{
    return this.http.get<any>(`${this.url}/${url}/${id}`, {
      headers: this.headers
    })
  }

  postCruds(url: any, body: FormData):Observable<any>{
    return this.http.post<any>(`${this.url}/${url}`, body, {
      headers: this.headers
    })
  }

  postCrudsRaws(url: any, body: any):Observable<any>{
    return this.http.post<any>(`${this.url}/${url}`, body, {
      headers: this.headersRaw
    })
  }

  updateCruds(url: any, id: any, body: any):Observable<any>{
    return this.http.patch<any>(`${this.url}/${url}/${id}`, body, {
      headers: this.headers
    })
  }

  UploadImages(url: any, id: any, body: FormData):Observable<any>{
    return this.http.patch<any>(`${this.url}/${url}/${id}`, body, {
      headers: this.headersRaw
    })
  }

  updateCrudsRaws(url: any, id: any, body: any):Observable<any>{
    return this.http.patch<any>(`${this.url}/${url}/${id}`, body, {
      headers: this.headersRaw
    })
  }

  RemoveCruds(url: any, id: any):Observable<any>{
    return this.http.delete<any>(`${this.url}/${url}/${id}`,{
      headers: this.headers
    })
  }

  RemoveCrudsImagesProducts(body: any):Observable<any>{
    return this.http.post<any>(`${this.url}/v1/store/products/removeImage`, body, {
      headers: this.headers
    })
  }

  //searchBar
  postSearchBar(like: any):Observable<any>{
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    const body = {like: like};
    const params = new HttpParams()
      .append('like', like);
    return this.http.post<any>(this.url + '/v1/store/products/search', body, {
      headers: headers,
      params: params
    })
  }

  //filtro
  postFilter(body: any, params: any):Observable<any>{
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return this.http.post<any>(this.url + '/v1/store/products/search', body, {
      headers: headers,
      params: params
    })
  }
}
