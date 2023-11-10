import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CarouselI } from '../../Models/carosuel/carousel';
import { MenuItem } from 'primeng/api';
import { ChipsModel } from 'src/app/Models/chips.interface';
import { ActivatedRoute,Params  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pet:string | null  = null
  clasf:string | null = null
  brand:string | null  = null
  price:string | null = null
  responsiveOptions: any = [];
  carousel!: CarouselI[];
  gfg: MenuItem[] = [];
  chips: ChipsModel[] = [];
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.brand=params.get('brand');
      this.clasf=params.get('clasf');
      this.pet=params.get('pet');
      this.price=params.get('price');
    })
    this.loadTypeProducts();
    this.carousel = [
      { image: '../../../../assets/carousel/pexels-engin-akyurt-14374653.jpg' },
      { image: '../../../../assets/carousel/pexels-lumn-4060142.jpg' },
      { image: '../../../../assets/carousel/pexels-mikkel-bendix-9789471.jpg' },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '720px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '360px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  loadTypeProducts() {
    this.gfg = [
      {
        label: 'Mascotas',
        items: [
          {
            label: 'Gato',
            id: '1',
            queryParams:{mascota:'categoria'},
            command: (event) => {
              this.addChip({
                id: event.item.id,
                label: event.item.label,
              })
            },
          },
          {
            label: 'Perro',
            id:'2',
            command: (event) => {
              this.addChip({
                id: event.item.id,
                label: event.item.label,
                icon: 'pi pi-apple',
                styleClass: 'p-mr-2',
              });
            },
          },
        ],
      },
      {
        label: 'Productos',
        items: [
          {
            label: 'Accesorios',
            icon: '-',
            items: [
              { label: 'Collares', icon: '-' },
              { label: 'Cepillos', icon: '-' },
              { label: 'Pecheras', icon: '-' },
              { label: 'Huacales', icon: '-' },
              { label: "Iglut's", icon: '-' },
            ],
          },
          {
            label: 'Alimentos',
            icon: '-',
            items: [
              { label: 'Secos', icon: '-' },
              { label: 'Humedos', icon: '-' },
            ],
          },
          {
            label: 'Juguetes',
            icon: '-',
            items: [
              { label: 'Bolas macizas', icon: '-' },
              { label: 'Varas', icon: '-' },
              { label: 'Juguete', icon: '-' },
            ],
          },
          {
            label: 'FarmaPet',
            icon: '-',
            items: [
              { label: 'Desparasitantes', icon: '-' },
              { label: 'Vitaminas', icon: '-' },
              { label: 'Homeopaticos', icon: '-' },
              { label: 'Antibioticos', icon: '-' },
              { label: 'Antiinflamatorio', icon: '-' },
            ],
          },
        ],
      },
      {
        label: 'Marcas',
        items: [
          { label: 'Agility' },
          { label: 'Proplan' },
          { label: 'Dog Chow' },
        ],
      },
      {
        label: 'Precios',
        items: [{}],
      },
    ];
  }

  addChip(chip: ChipsModel){

    if (this.chips.length>0) {
      const filter=this.chips.filter(chipFil => chipFil.id===chip.id && chipFil.label===chip.label)
      if (filter.length==0) {
        this.chips.push(chip)
      }
    }else{
      this.chips.push(chip)
    }
  }
  deleteChip(chip: ChipsModel){
    if (this.chips.length>0) {
      const index= this.chips.indexOf(chip)
      console.warn(index);
      this.chips.splice(index,1)
    }
  }

}
