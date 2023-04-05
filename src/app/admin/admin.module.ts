import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardPannelComponent } from './dashboard-pannel/dashboard-pannel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { PurchaseStockComponent } from './purchase-stock/purchase-stock.component';
import { SellingHistoryComponent } from './selling-history/selling-history.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { ManageFarmersComponent } from './manage-farmers/manage-farmers.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ManageProductCategoryComponent } from './manage-product-category/manage-product-category.component';
import { ManageVegitablesComponent } from './manage-vegitables/manage-vegitables.component';
import { ManageFruitsComponent } from './manage-fruits/manage-fruits.component';
import { ManageSeedsComponent } from './manage-seeds/manage-seeds.component';



@NgModule({
  declarations: [
    DashboardPannelComponent,
    DashboardComponent,
    CustomerOrdersComponent,
    PurchaseStockComponent,
    SellingHistoryComponent,
    PurchaseHistoryComponent,
    ManageFarmersComponent,
    ManageCustomersComponent,
    ProductCategoryComponent,
    ManageProductCategoryComponent,
    ManageVegitablesComponent,
    ManageFruitsComponent,
    ManageSeedsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    

    
  ]
})
export class AdminModule { }
