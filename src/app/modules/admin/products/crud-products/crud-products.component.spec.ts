import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDProductsComponent } from './crud-products.component';

describe('CRUDProductsComponent', () => {
  let component: CRUDProductsComponent;
  let fixture: ComponentFixture<CRUDProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
