import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'main', component : MainComponent},
  {path:'register', component : RegisterComponent},  
  {path:'our-products', component : OurProductsComponent},
  {path:'footer', component : FooterComponent}
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
