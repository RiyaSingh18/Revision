import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [],
  imports: [
    SidebarModule,
    AccordionModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    DialogModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DynamicDialogModule,
    ToastModule,
    CarouselModule,
    ImageModule,
    BadgeModule,
    TableModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  exports: [
    SidebarModule,
    AccordionModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    DialogModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DynamicDialogModule,
    ToastModule,
    CarouselModule,
    BadgeModule,
    ImageModule,
    TableModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
  ],
})
export class PrimeModule {}
