import { Component, OnInit } from '@angular/core';
import { CategoriesModels, SubcategoriesModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../products/service/product.service';
import { CarouselI } from '../../Models/carosuel/carousel'
import { UsersService } from '../services/users/users.service';
import { ApiCrudService } from '../services/cruds/api-cruds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories:CategoriesModels[] = [];
  subcategories:SubcategoriesModel[] = [];
  responsiveOptions:any = [];
  responsiveOptions2: any = []
  carousel!:CarouselI[];
  imagesProducts: Array<any> = [];
  val: number = 3;
  products: any

  constructor(private service:ProductService, private userService: UsersService, private api: ApiCrudService) { }

  ngOnInit(): void {
    // this.getSubCategories();
    // this.carouselService.getCarousel().then(Carousel=> {
    //   this.carousel = Carousel;
    // })

    this.carousel = [{image: '../../../../assets/carousel/pexels-engin-akyurt-14374653.jpg'},
    {image: '../../../../assets/carousel/pexels-lumn-4060142.jpg'},
    {image: '../../../../assets/carousel/pexels-mikkel-bendix-9789471.jpg'}];

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '720px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '360px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    this.responsiveOptions2 = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    this.imagesProducts.push(
      '../../../assets/product.png', '../../../assets/product.png', '../../../assets/product.png','../../../assets/product.png')
    this.getProducts()
  }

  getProducts(){
    this.api.getCruds("v1/store/products/features/items").subscribe({
      next: (res)=>{
        this.products = res
      }
    })
  }

  getSubCategories(){
    this.service.getSubcategories().subscribe({
      next: (ok) => {
        this.subcategories = ok
        console.log(ok)
      },
      error: (err) => {}
    });
  }

}
