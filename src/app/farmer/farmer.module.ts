import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { CurrentStockComponent } from './current-stock/current-stock.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SoldItemsComponent } from './sold-items/sold-items.component';


@NgModule({
  declarations: [
    FarmerComponent,
    CurrentStockComponent,
    AddProductComponent,
    SoldItemsComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule
  ]
})
export class FarmerModule { }
