import { Injectable } from '@angular/core';
import { CarouselI } from '../../Models/carosuel/carousel'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  getCarousel(){
    return this.http.get<any>('../../../../assets/carousel.json')
    .toPromise()
    .then(res => <CarouselI[]>res.data)
    .then(data => {return data;});
  }
}
