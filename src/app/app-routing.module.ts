import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'customer', loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'farmer', loadChildren: () => import('./farmer/farmer.module').then((m) => m.FarmerModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
