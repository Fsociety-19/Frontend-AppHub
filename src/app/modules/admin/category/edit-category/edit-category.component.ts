import { MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesModels } from 'src/app/Models/CategoriesModel';
import { ProductService } from '../../../../services/products/product.service';
import { UsersService } from '../../../../services/users/users.service';
import { ApiCrudService } from '../../../../services/cruds/api-cruds.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
  providers: [MessageService],
})
export class EditCategoryComponent implements OnInit {
  idCategory!: any;
  archivo: any;

  //variables category
  category!: CategoriesModels;
  formCategory!: FormGroup;
  nuevo: boolean = false;
  image: any = '../../../../assets/default-thumbnail.jpg';
  images: any = '';
  disableButtonDelete: boolean = false;
  constructor(
    private productService: ProductService,
    private _router: ActivatedRoute,
    formBuilder: FormBuilder,
    private userService: UsersService,
    private sanitizer: DomSanitizer,
    private messageService: MessageService,
    private api: ApiCrudService
  ) {
    this.formCategory = formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    this.idCategory = this._router.snapshot.paramMap.get('id');
    if (this.idCategory != 'new') {
      this.getCategory();
    } else {
      this.nuevo = true;
      this.disableButtonDelete = true;
    }
  }

  deleteImage() {
    this.image = '../../../../assets/default-thumbnail.jpg';
    this.disableButtonDelete = true;
  }

  getCategory() {
    this.productService.getCategoryById(this.idCategory).subscribe({
      next: (data) => {
        this.category = data;
        this.formCategory.setValue({
          name: data.name,
          image: data.image,
        });
        this.image = data.image;
      },
      error: (err) => {

      },
    });
  }

  uploadImg(event: any) {}

  //image capture
  fileEvent($event: any): any {
    const [ file ] = $event.target.files
    this.archivo = {
      fileRaw: file,
      fileName: file.name,
    };
    this.extraerBase64(file).then((image) => {
      this.image = image;
    });
  }

  //image capture
  fileUpdate($event: any): any {
    const [ file ] = $event.target.files
    this.archivo = {
      fileRaw: file,
      fileName: file.name,
    };
    this.extraerBase64(file).then((image) => {
      this.image = image;
    });
    if (this.archivo) this.updateImage()
  }

  updateImage(){
    const body = new FormData()
    body.append("image", this.archivo.fileRaw, this.archivo.fileName)
    this.api.UploadImages("v1/store/categories/imageup", this.idCategory, body).subscribe({
      next: (res)=>{
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Actualizado con exito!',
        });
      }, error: (err)=> {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });
      }
    })
  }

  //extraer base64
  extraerBase64 = async ($event: any) =>
    new Promise((resolve: any) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustHtml(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          resolve(null);
        };
        return;
      } catch (e) {
        return null;
      }
    });
  //Actualizar datos
  saveChange() {
    const params = {
      name: this.formCategory.value.name,
    };
    this.productService.patchEditCategory(this.idCategory, params).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Actualizado con exito!',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });
      },
    });
  }

  //Crear Nuevo
  newItem() {
    const params = new FormData();
    params.append('image', this.archivo.fileRaw, this.archivo.fileName);
    params.append('name', this.formCategory.value.name);

    this.productService.postNewCategory(params).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Creado con exito!',
        });
      },
      error: (err) => {

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salió mal :(',
        });
      },
    });
  }

  // ir atras
  goBack(){
    location.href = "/crud-categories"
  }
}
