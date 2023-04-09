import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { PurchaseStockComponent } from './purchase-stock/purchase-stock.component';
import { DashboardPannelComponent } from './dashboard-pannel/dashboard-pannel.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { SellingHistoryComponent } from './selling-history/selling-history.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ManageVegitablesComponent } from './manage-vegitables/manage-vegitables.component';
import { ManageSeedsComponent } from './manage-seeds/manage-seeds.component';
import { ManageProductCategoryComponent } from './manage-product-category/manage-product-category.component';
import { ManageFruitsComponent } from './manage-fruits/manage-fruits.component';
import { ManageFarmersComponent } from './manage-farmers/manage-farmers.component';
import { FmsDashboardComponent } from './fms-dashboard/fms-dashboard.component';

const routes: Routes = [
  {path:'' ,
   component:DashboardComponent,
   children:[
    {path:'customer-orders' ,component: CustomerOrdersComponent},
    {path:'selling-history' ,component: SellingHistoryComponent},
    {path:'purchase-stock' ,component: PurchaseStockComponent},
    {path:'product-category' ,component: ProductCategoryComponent},
    {path:'manage-vegitables' ,component: ManageVegitablesComponent},
    {path:'manage-seeds' ,component: ManageSeedsComponent},
    {path:'manage-product-category' ,component: ManageProductCategoryComponent},
    {path:'manage-farmers' ,component: ManageFarmersComponent},
    {path:'manage-customers' ,component: ManageCustomersComponent},
    {path:'purchase-history' ,component: PurchaseHistoryComponent},
    {path:'manage-fruits' ,component: ManageFruitsComponent},
    {path:'fms-dashboard' ,component: FmsDashboardComponent},
   ],
}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
