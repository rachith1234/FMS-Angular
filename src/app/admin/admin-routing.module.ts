import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseStockComponent } from './purchase-stock/purchase-stock.component';
import { DashboardPannelComponent } from './dashboard-pannel/dashboard-pannel.component';

const routes: Routes = [
  {path:'admin' , component:DashboardComponent},

  {path:'admin',
    children:[
      {path:'app-dashboard-pannel', component:DashboardPannelComponent},
      {path:'purchase-stock', component:PurchaseStockComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
