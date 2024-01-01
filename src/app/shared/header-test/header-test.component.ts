import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.css'],
})
export class HeaderTestComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {

  }

  //autocomplete
  autocomplete() {
  }

  responsiveBar(){
    setTimeout(() => {
      this.autocomplete()
    }, 500);
  }


}
