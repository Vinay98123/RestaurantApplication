import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
function _window():any{
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  userDetails: any;
 

  loggedIn: boolean;
  cart: any;
  constructor(private httpClient: HttpClient) {
    this.loggedIn = false;
    this.cart = {
      o_id: 0,
      f_id: "",
      f_name:"",
      f_desc:"",
      u_id: "",
      f_img: "",
      f_price: ""
    }
  }
  setloggedIn() {
    this.loggedIn = true;
  }
  getloggedIn() {
    return this.loggedIn;
  }
  setUser(userDetails:any){
    this.userDetails=userDetails;
  }
  getUser(){
    return  this.userDetails;
  }
  getAllFoods() {
    return this.httpClient.get("/Display/Food");
  }
  insert(food: any) {
    return this.httpClient.post("/Display/Food", food);
  }
  insertUser(user: any) {
    return this.httpClient.post("Display/User", user);
  }
  update(food: any) {
    return this.httpClient.put("/Display/Food/", food);
  }
  DeleteById(f_id: any) {
    return this.httpClient.delete("/Display/Food/" + f_id);
  }
  getAllUserData() {
    return this.httpClient.get("/Display/User");
  }
  searchbyname(f_name: any) {
    return this.httpClient.get("/Display/Search/" + f_name);
  }
  searchcategory(foods: any) {
    console.log(foods);
    return this.httpClient.get("/Display/Searchca/" + foods);
  }
  insertOrder(item: any) {
    console.log(item);
    this.cart.f_id = item.f_id;
    this.cart.f_name=item.f_name;
    this.cart.u_id = this.userDetails.u_id;
    this.cart.f_img = item.f_img;
    this.cart.quantity=1;
    this.cart.f_desc = item.f_desc;
    this.cart.f_price = item.f_price;
    console.log(this.cart);
    return this.httpClient.post("Display/Orders", this.cart)
  }
  updateCart(cart:any){
    return this.httpClient.put("Display/Orders",cart)
  }
  get nativeWindow() : any{
    return _window();
}
}

