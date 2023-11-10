import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderTestComponent } from './header-test/header-test.component';
import { SliderComponent } from './slider/slider.component';
import { PrimeIcons } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';



@NgModule({
  declarations: [
    FooterComponent,
    SliderComponent,
    HeaderTestComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MegaMenuModule,
    ButtonModule,
    CarouselModule,
    ImageModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    RatingModule,
    SelectButtonModule,
    InputNumberModule,
    GalleriaModule,
    AutoCompleteModule,
    BadgeModule,
    ToggleButtonModule,
    ListboxModule,
    OverlayPanelModule,
    TableModule,
    SidebarModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ToastModule,
    FileUploadModule,
    ConfirmDialogModule,


  ],
  providers: [PrimeIcons],
  exports:[
    FooterComponent,
    SliderComponent,
    HeaderTestComponent,
  ],

})
export class SharedModule { }
