import { Component, OnInit } from '@angular/core';
import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../../services/products/product.service';
import { CarouselService } from '../../../services/carousel/carousel.service'
import { CarouselI } from '../../../Models/carosuel/carousel'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  responsiveOptions:Array<any> = [];
  images:any = [];

  categories!:CarouselI[];

  constructor(private productService:ProductService, private carouselService: CarouselService) { }

  ngOnInit(): void {
    // this.carouselService.getCarousel().then(Carousel=> {
    //   this.categories = Carousel;
    //
    // })
    this.categories = [{image: '../../../../assets/carousel/pexels-engin-akyurt-14374653.jpg'},
    {image: '../../../../assets/carousel/pexels-lumn-4060142.jpg'},
    {image: '../../../../assets/carousel/pexels-mikkel-bendix-9789471.jpg'}]

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

}
