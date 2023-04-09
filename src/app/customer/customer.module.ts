import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { OrdersComponent } from './orders/orders.component';
import { BuyingComponent } from './buying/buying.component';


@NgModule({
  declarations: [
    CustomerComponent,
    OrdersComponent,
    BuyingComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
