import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private readonly URL = environment.api+'api/v1/store/';

  constructor(private http:HttpClient) { }

  getCategories():Observable<CategoriesModels[]>{
    return this.http.get<CategoriesModels[]>(`${this.URL}categories`)
  }
}
