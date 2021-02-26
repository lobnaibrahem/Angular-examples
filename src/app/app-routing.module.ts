import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { AddproductRFormComponent } from './components/addproduct-rform/addproduct-rform.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'shop',component:ShopComponent},
  {path:'admin/insertproduct',component:AddNewProductComponent},
  {path:'productsList',component:ProductsListComponent},
  {path:'addproduct',component:AddproductRFormComponent},
  {path:'login',component:LoginComponent},
  {path:'product/:ID/:cont',component:ProductComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
