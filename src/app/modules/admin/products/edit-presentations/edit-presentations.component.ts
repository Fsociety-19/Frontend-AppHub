import { Component, OnInit } from '@angular/core';
import { PresentationsModel } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../../../services/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiCrudService } from '../../../../services/cruds/api-cruds.service';

@Component({
  selector: 'app-edit-presentations',
  templateUrl: './edit-presentations.component.html',
  styleUrls: ['./edit-presentations.component.css'],
  providers: [MessageService],
})
export class EditPresentationsComponent implements OnInit {
  campos: Array<any> = [
    'Code',
    'Name',
    'Reference',
    'Plu',
    'Stock',
    'Price1',
    'Price2',
    'Price3',
    'Med',
    'Bulk',
    'IsActive',
    'productId',
  ];

  productId: any;
  New: boolean = false;
  formPresentations!: FormGroup;
  presentations!: PresentationsModel;
  constructor(
    private productService: ProductService,
    private api: ApiCrudService,
    private _route: ActivatedRoute,
    fromBuilder: FormBuilder,
    public messageService: MessageService,
    private router: Router
  ) {
    this.formPresentations = fromBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      reference: ['', Validators.required],
      plu: ['', Validators.required],
      stock: ['', Validators.required],
      price1: ['', Validators.required],
      price2: ['', Validators.required],
      price3: ['', Validators.required],
      med: ['', Validators.required],
      bulk: [false, Validators.required],
      isActive: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    let id = this._route.snapshot.paramMap.get('id');
    this.productId = id;
    let code = this._route.snapshot.paramMap.get('code');

    if (code === 'new') {
      this.New = true;
    } else {
      this.getproduct(id, code);
    }
  }

  getproduct(id: any, code: any) {
    this.productService.getProductById(id).subscribe({
      next: (pro) => {
        let presetaciones = pro.presentations;
        for (let el of presetaciones) {
          if (el.code == code) {
            this.presentations = el;
            this.formPresentations.setValue({
              code: this.presentations.code,
              name: this.presentations.name,
              reference: this.presentations.reference,
              plu: this.presentations.plu,
              stock: this.presentations.stock,
              price1: this.presentations.price1,
              price2: this.presentations.price2,
              price3: this.presentations.price3,
              med: this.presentations.med,
              bulk: this.presentations.bulk,
              isActive: this.presentations.isActive,
            });
          }
        }
      },
    });
  }

  updateOrNew() {
    const params = {
      code: this.formPresentations.value.code,
      name: this.formPresentations.value.name,
      reference: this.formPresentations.value.reference,
      plu: this.formPresentations.value.plu,
      stock: this.formPresentations.value.stock,
      price1: this.formPresentations.value.price1,
      price2: this.formPresentations.value.price2,
      price3: this.formPresentations.value.price3,
      med: this.formPresentations.value.med,
      bulk: this.formPresentations.value.bulk,
      isActive: this.formPresentations.value.isActive,
      productId: this.productId,
    };
    if (!this.New) {
      delete params.code
      this.api.updateCrudsRaws("v1/store/products/Presentation" , this.formPresentations.value.code, params).subscribe({
        next: (data) => {

          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: 'Actualizado con extito!',
          });
          this.router.navigate(['crud-products/crud-presentations/'+ this.productId])
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Algo salió mal :('});
        },
      });
    } else {
      this.api.postCrudsRaws('v1/store/products/addPresentation', params).subscribe({
        next: (data) => {

          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: 'Creado con exito',
          });
          this.router.navigate(['crud-products/crud-presentations/'+ this.productId])
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Algo salió mal :('});
        },
      });
    }
  }
}
