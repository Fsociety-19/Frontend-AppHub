import { FooterComponent } from '../../../shared/footer/footer.component';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';

import {
  CategoriesModels,
  ClasificationModel,
} from 'src/app/Models/CategoriesModel';
import { ProductsModel } from 'src/app/Models/produts/productsModel';
import { ProductService } from '../../../products/service/product.service';
import { UsersService } from '../../../services/users/users.service';
import { ApiCrudService } from '../../../services/cruds/api-cruds.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
  providers: [MessageService],
})
export class EditProductsComponent implements OnInit {
  options: Array<any> = [];
  archivo: any;

  name!: string;
  description!: string;
  brands: any;
  focus1: any;
  focus2: any;
  focus3: any;
  focus4: any;
  focus5: any;

  imagenes: any = [];
  responsiveOptions: any;

  //Forrmulario
  formProducts!: FormGroup;

  product: any;

  marcas: any = [];
  categoria: any = [];
  subcategoria: any = [];
  clasificacion: any = [];

  switch: boolean = false;
  imageSelect: any = '';
  image: any;
  newImage: any;
  //variable heredada
  @Input() id: any;

  constructor(
    private productService: ProductService,
    fromBuilder: FormBuilder,
    private userService: UsersService,
    private api: ApiCrudService,
    public messageService: MessageService
  ) {
    this.formProducts = fromBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      brands: ['', Validators.required],
      categories: [0, Validators.required],
      subcategorie: [0, Validators.required],
      clasifications: [0, Validators.required],
      state: [false, Validators.required],
      iva: ['', Validators.required],
      desc: ['', Validators.required],
      startPromo: ['', Validators.required],
      endPromo: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    if (!localStorage.getItem('token')){
      window.location.href = "/"
    }
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '960px',
        numVisible: 4,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];

    this.getMarcas();
    this.getCategorias();
    this.getSubcategorias();
    this.getClasificacion();
    if (this.id != null) {
      this.getProduct();
    } else {
      this.switch = true;
    }
  }

  //detalle de productos
  getProduct() {
    this.productService.getProductById(this.id).subscribe({
      next: (data) => {
        this.product = data;
        this.imagenes = data.images;
        this.imageSelect = data.image;
        this.clasificacion.map((el: any) => {
          if (data.clasificationId === el.id) {
            this.formProducts.patchValue({subcategorie: el.subCategorieId})
          }
        });
        this.subcategoria.forEach((el: any) => {
          if (this.formProducts.value.subcategorie === el.id) {
            this.formProducts.patchValue({categories: el.categorieId})
          }
        });
        this.getClasificacionAndSubCategorie(this.formProducts.value.categories, this.formProducts.value.subcategorie)
        const fechaInicial = new Date(this.product.startDiscount);
        const formattedDate = fechaInicial.toISOString().substring(0, 10);
        const fechaInicial1 = new Date(this.product.endDiscount);
        const formattedDate1 = fechaInicial1.toISOString().substring(0, 10);
        this.formProducts.patchValue({
          name: this.product.name,
          description: this.product.description,
          brands: this.product.brandId,
          clasifications: this.product.clasificationId,
          state: this.product.isActive,
          iva: this.product.iva,
          desc: this.product.discount,
          startPromo: formattedDate,
          endPromo: formattedDate1,
        });
      },
    });
  }
  //categorias
  getCategorias() {
    this.productService.getCategories().subscribe({
      next: (data) => {
        data.forEach((el) => {
          this.categoria.push(el);
        });
      },
    });
  }
  //subcategorias
  getSubcategorias() {
    this.subcategoria = [];
    this.productService.getSubcategories().subscribe({
      next: (data) => {
        data.forEach((el: any)=> this.subcategoria.push(el))
      },
    });
  }

  changeSubcategoria(){
    this.subcategoria = []
    this.productService.getSubcategories().subscribe({
      next: (data) => {
        data.forEach((el: any)=> {
          if (this.formProducts.value.categories === el.categorieId){
            this.subcategoria.push(el)
          }
        })
      },
    });
  }

  //Clasificacion y categorias
  getClasificacionAndSubCategorie(cId: number, sId: number){
    this.subcategoria = this.subcategoria.filter((el:any)=> el.categorieId === cId )
    this.clasificacion = this.clasificacion.filter((el:any)=> el.subCategorieId === sId )
  }

  //Calsificacion
  getClasificacion() {
    this.clasificacion = [];
    this.productService.getClasification().subscribe({
      next: (data) => {
        data.forEach((el)=> this.clasificacion.push(el))
      },
    });
  }

  changeClasificacion(){
    this.clasificacion = []
    this.productService.getClasification().subscribe({
      next: (data) => {
        data.forEach((el: any)=> {
          if (this.formProducts.value.subcategorie === el.subCategorieId){
            this.clasificacion.push(el)
          }
        })
      },
    });
  }

  //marcas
  getMarcas() {
    this.productService.getBrands().subscribe({
      next: (data) => {
        data.forEach((el) => {
          this.marcas.push({ name: el.name, code: el.id });
        });
      },
    });
  }
  //nuevo
  addNew() {
    const params = new FormData();
    params.append('name', this.formProducts.value.name);
    params.append('description', this.formProducts.value.description);
    params.append('brandId', this.formProducts.value.brands);
    params.append('discount', this.formProducts.value.desc);
    params.append('clasificationId', this.formProducts.value.clasifications);
    params.append('iva', this.formProducts.value.iva);
    params.append('startDiscount', this.formProducts.value.startPromo);
    params.append('endDiscount', this.formProducts.value.endPromo);
    params.append('isActive', this.formProducts.value.state);
    params.append('image', this.archivo.fileRaw, this.archivo.fileName);

    this.productService.postNewProduct(params).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Actualizado con exito!',
        });
        this.formProducts.reset();
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });
      },
    });
  }

  //editar
  editProduct() {
    const body = {
      name: this.formProducts.value.name,
      description: this.formProducts.value.description,
      brandId: this.formProducts.value.brands,
      discount: this.formProducts.value.desc,
      clasificationId: this.formProducts.value.clasifications,
      iva: this.formProducts.value.iva,
      startDiscount: this.formProducts.value.startPromo,
      endDiscount: this.formProducts.value.endPromo,
      isActive: this.formProducts.value.state,
    };
    this.api.updateCrudsRaws('v1/store/products', this.id, body).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Actualizado con exito!',
        });
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Algo salió mal :(',
        });
      },
    });
  }
  //deleteImage
  deleteImage(id: any) {
    const params = new FormData();
    params.append('id', id);
    params.append('productId', this.id);
    this.userService.postRemoveImagesProducts(params).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Eliminado con exito!',
        });
        location.reload();
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

  //uploadIMAGE
  uploadImg() {
    const body = new FormData();
    body.append('productId', this.id);
    body.append('image', this.image.fileRaw, this.image.fileName);
    this.userService.postUploadImgProducts(body).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Se actualizaron los datos!',
        });
        location.reload();
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

  //change imagen
  changeImagen() {
    if (this.newImage) {
      const body = new FormData();
      body.append('image', this.newImage.fileRaw, this.newImage.fileName);
      this.api
        .UploadImages('v1/store/products/imageup', this.id, body)
        .subscribe({
          next: (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'success',
              detail: 'Se actualizaron los datos!',
            });
            location.reload();
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
  }
  //imageMain
  fileEvent($event: any) {
    const [file] = $event.target.files;
    this.archivo = {
      fileRaw: file,
      fileName: file.Name,
    };
  }

  //images
  ExtractImage($event: any) {
    const [file] = $event.target.files;
    this.image = {
      fileRaw: file,
      fileName: file.Name,
    };
    if (this.image) this.uploadImg();
  }

  //cambiar imagen
  cambiarImagen($event: any) {
    const [file] = $event.target.files;
    this.newImage = {
      fileRaw: file,
      fileName: file.Name,
    };
  }

  addImageMain(event: any) {
    console.log(event.currentFiles[0].name);
  }

  //ver image
  viewImage(image: any) {
    this.imageSelect = image;
  }

  // ir atras
  goBack() {
    location.href = '/crud-products';
  }
}
