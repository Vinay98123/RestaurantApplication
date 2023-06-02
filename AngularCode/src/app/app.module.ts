import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { InsertComponent } from './insert/insert.component';
import { RestaurantComponent } from './adminaccess/restaurant.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { EncrDecrSeviceService } from './encr-decr-sevice.service';
import { TotalPipe } from './total.pipe';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    UpdateComponent,
    InsertComponent,
    RestaurantComponent,
    UserComponent,
    CartComponent,
    RegComponent,
 
    HomeComponent,
    CheckoutComponent,

    TotalPipe,

  
 
 
  ],
 

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgxCaptchaModule
  
  ],
  providers: [EncrDecrSeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
