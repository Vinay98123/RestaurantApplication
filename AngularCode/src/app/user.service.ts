import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public cartItemList: any = []
  public foodList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  constructor(private httpClient: HttpClient) {


  }

  getLocation(){
    return this.httpClient.get('https://ipapi.co/json/');
  }

  getFoods(u_id:any) {
    return this.httpClient.get("Display/user/"+u_id)
  }
  setFood(food: any) {
    this.cartItemList.push(...food);
    this.foodList.next(food);
  }
  addtoCart(food: any) {
    this.cartItemList.push(food);
    this.foodList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)

  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(food: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (food.f_id == a.f_id) {
        this.cartItemList.splice(index, 1);
      }
    })
  }
  removeAllCart() {
    this.cartItemList = [];
    this.foodList.next(this.cartItemList);
  }
  
  deleteCart(id:number){
    return this.httpClient.delete("Display/Orders/"+id);
  }
  getCount(u_id:any){
    return this.httpClient.get("Display/count/"+u_id);
  }
  searchbyname(o_name: any) {
    return this.httpClient.get("/Display/search/"+o_name);

  }
 }