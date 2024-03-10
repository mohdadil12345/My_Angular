import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartPageComponent } from './container/product-list/cart-page/cart-page.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path : "", component :HomePageComponent},
  {path : "Login", component :LoginPageComponent},
  {path : "Signup", component :SignupPageComponent},
  {path : "Cart", component :CartPageComponent},
  {path : "Products", component :ContainerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
