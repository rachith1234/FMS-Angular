import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component : MainComponent},
  {path:'register', component : RegisterComponent},  
  {path:'our-products', component : OurProductsComponent},
  {path:'footer', component : FooterComponent},
  { path: 'admin', component: DashboardComponent }
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
