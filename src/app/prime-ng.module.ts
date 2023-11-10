import { NgModule } from '@angular/core';
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
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [],
  exports: [
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
    TriStateCheckboxModule,
    ConfirmDialogModule,
    PaginatorModule,
    AccordionModule,
    PanelMenuModule,
    ChipModule
  ],
})
export class PrimeNGModule { }
