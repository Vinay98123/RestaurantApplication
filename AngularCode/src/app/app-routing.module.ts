import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { InsertComponent } from './insert/insert.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './adminaccess/restaurant.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { RegComponent } from './reg/reg.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'admin',component:AdminComponent},
{path:'update',component:UpdateComponent},
{path:'admin/rest',component:RestaurantComponent}, 
{path:'admin/insert',component:InsertComponent},
{path:'header',component:HeaderComponent},
{path:'user',component:UserComponent},
{path:'user/cart',component:CartComponent},
{path:'login/reg',component:RegComponent},
{path:'checkout',component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
