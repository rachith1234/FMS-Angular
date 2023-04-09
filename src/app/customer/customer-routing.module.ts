import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { OrdersComponent } from './orders/orders.component';
import { BuyingComponent } from './buying/buying.component';

const routes: Routes = [
  {path:'' ,
   component:CustomerComponent,
   children:[
    {path:'' ,component: BuyingComponent},
    {path:'orders' ,component: OrdersComponent},
    
   ],

  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
