import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { CurrentStockComponent } from './current-stock/current-stock.component';


@NgModule({
  declarations: [
    FarmerComponent,
    CurrentStockComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule
  ]
})
export class FarmerModule { }
