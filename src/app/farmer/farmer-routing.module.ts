import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerComponent } from './farmer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CurrentStockComponent } from './current-stock/current-stock.component';
import { SoldItemsComponent } from './sold-items/sold-items.component';

const routes: Routes = [
  {path:'' , component:FarmerComponent,
   children:[
    {path:'' , component:AddProductComponent,},
    {path:'add-product' ,component: AddProductComponent},
    {path:'current-stock' ,component: CurrentStockComponent},
    {path:'sold-items' ,component: SoldItemsComponent},
    
    
   ],

  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
