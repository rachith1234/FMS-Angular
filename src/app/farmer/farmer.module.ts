import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { CurrentStockComponent } from './current-stock/current-stock.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    FarmerComponent,
    CurrentStockComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule
  ]
})
export class FarmerModule { }
