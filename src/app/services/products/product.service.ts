import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, retry } from 'rxjs';
import {
  BarndsModels,
  CategoriesModels,
  ClasificationModel,
  PresentationsModel,
  SubcategoriesModel,
} from 'src/app/Models/CategoriesModel';
import {
  ProductsLocalModel,
  ProductsModel,
} from 'src/app/Models/produts/productsModel';
import { environment } from 'src/environments/environment';
import { CategoryComponent } from '../../pages/products/category/category.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  headers = new HttpHeaders()
  .append('Content-Type', 'application/x-www-form-urlencoded')
  .append('Authorization', 'Bearer ' + localStorage.getItem('token'));

  headersImg = new HttpHeaders()
  .append('Authorization', 'Bearer ' + localStorage.getItem('token'));

  private product: BehaviorSubject<any> = new BehaviorSubject<any>('0');

  private readonly URL = environment.api + '/v1/store/';

  constructor(private http: HttpClient) {}

  get productId() {
    return this.product.asObservable();
  }

  set productIdS(id: string) {
    this.product.next(id);
  }

  //PORDUCTS
  getProducts(): Observable<ProductsModel[]> {
    let headers = new HttpHeaders()
    //.append('Authorization', 'Bearer R5cCI6IkpXVCJ9.eyJzdWIiOjksInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3MzA0NjA5Mn0.fVQdxXrDJIQluAbaXC7cb6XYX9fgwi6Pl24mk1pBJ1M')
    .append('Content-Type', 'application/json')
    return this.http.get<ProductsModel[]>(`${this.URL}products`, {
      headers: headers
    });
  }

  getProductById(id: number): Observable<ProductsModel> {
    return this.http.get<ProductsModel>(`${this.URL}products/${id}`);
  }

  deleteProduct(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.URL}products/${id}`);
  }

  patchEditProduct(id: number, params: any): Observable<any> {
    return this.http.patch<any>(`${this.URL}products/${id}`, params, {
      headers: this.headers,
    });
  }

  postNewProduct(params: any): Observable<any> {
    return this.http.post<any>(`${this.URL}products/new`, params, {
      headers: this.headersImg,
    });
  }

  //CATEGORIES
  getCategories(): Observable<CategoriesModels[]> {
    return this.http.get<CategoriesModels[]>(`${this.URL}categories/`);
  }

  getCategoryById(id: number): Observable<CategoriesModels> {
    return this.http.get<CategoriesModels>(`${this.URL}categories/${id}`);
  }

  deleteCategory(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.URL}categories/${id}`, {
      headers: this.headers,
    });
  }

  patchEditCategory(id: number, params: any): Observable<any> {
    return this.http.patch<any>(`${this.URL}categories/${id}`, params, {
      headers: this.headersImg,
    });
  }

  postNewCategory(params: any): Observable<any> {
    return this.http.post<any>(`${this.URL}categories/new`, params, {
      headers: this.headersImg,
    });
  }

  //SUBCATEGORIES
  getSubcategories(): Observable<SubcategoriesModel[]> {
    return this.http.get<SubcategoriesModel[]>(`${this.URL}subCategorie`);
  }

  getSubcategoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}subCategorie/${id}`);
  }

  deletesubcategory(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.URL}subcategorie/${id}`, {
      headers: this.headers,
    });
  }

  pacthEditSubcategory(id: number, params: any): Observable<any> {
    return this.http.patch<any>(`${this.URL}subcategorie/${id}`, params, {
      headers: this.headersImg,
    });
  }

  postNewSubcategory(params: FormData): Observable<any> {
    return this.http.post(`${this.URL}subcategorie/new`, params, {
      headers: this.headersImg,
    });
  }

  //CLASIFICATIONS
  getClasification(): Observable<ClasificationModel[]> {
    return this.http.get<ClasificationModel[]>(this.URL + 'clasification');
  }

  getClasificationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}clasification/${id}`);
  }

  deleteClasification(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.URL}clasification/${id}`, {
      headers: this.headers,
    });
  }

  patchEditClasification(id: number, params: any): Observable<any> {
    return this.http.patch<any>(`${this.URL}clasification/${id}`, params, {
      headers: this.headersImg,
    });
  }

  postNewClasification(params: any): Observable<any> {
    return this.http.post<any>(`${this.URL}clasification/new`, params, {
      headers: this.headersImg,
    });
  }

  //BRANDS
  getBrands(): Observable<BarndsModels[]> {
    return this.http.get<BarndsModels[]>(this.URL + 'brands');
  }

  getBrandById(id: number): Observable<BarndsModels> {
    return this.http.get<BarndsModels>(`${this.URL}brands/${id}`);
  }

  deleteBrand(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.URL}brands/${id}`, {
      headers: this.headers,
    });
  }

  patchEditBrand(id: number, params: any): Observable<any> {
    return this.http.patch<any>(`${this.URL}brands/${id}`, params, {
      headers: this.headersImg,
    });
  }

  postNewBrand(params: FormData): Observable<any> {
    return this.http.post<any>(`${this.URL}brands/new`, params, {
      headers: this.headersImg
    });
  }

  //PRESENTATIONS

  postNewPresentation(params: any): Observable<any> {
    return this.http.post<any>(`${this.URL}products/addPresentation`, params, {
      headers: this.headers,
    });
  }

  patchEditPresentation(id: number, params: any): Observable<any> {
    return this.http.patch<any>(`${this.URL}products/addPresentation/${id}`, params, {
      headers: this.headers
    })
  }
  //ORDEN COMPRA


}
