import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { PurchaseStockComponent } from './purchase-stock/purchase-stock.component';
import { DashboardPannelComponent } from './dashboard-pannel/dashboard-pannel.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';

const routes: Routes = [
  {path:'' ,
   component:DashboardComponent,
   children:[
    {path:'manage-customers' ,component: ManageCustomersComponent},
   ],
}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
