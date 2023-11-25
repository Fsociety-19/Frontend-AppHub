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
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
  }

}
