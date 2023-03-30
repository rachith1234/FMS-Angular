import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseStockComponent } from './purchase-stock/purchase-stock.component';

const routes: Routes = [
  {path:'admin' , component:DashboardComponent},

  {path:'admin',
    children:[
      {path:'customer-orders', component:CustomerOrdersComponent},
      {path:'purchase-stock', component:PurchaseStockComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
