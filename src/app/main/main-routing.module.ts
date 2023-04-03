import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { OurProductsComponent } from '../our-products/our-products.component';
import { RegisterComponent } from '../register/register.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path:'' ,
   component:MainComponent,
   children:[
    {path:'' ,component: HomeComponent },
    {path:'register' ,component: RegisterComponent },
    {path:'home' ,component: HomeComponent },
    {path:'our-products' ,component: OurProductsComponent },
    {path:'footer' ,component: FooterComponent },
   ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
