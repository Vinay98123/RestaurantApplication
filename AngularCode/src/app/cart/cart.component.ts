import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public orders:any;
   grandTotal :any; 
  thisUser:any;
   
  
  constructor(private  userservice:UserService, private rs:RestaurantService) { 
    this.grandTotal=0;
  }
  
  ngOnInit(): void {
    this.thisUser=this.rs.getUser();
    this.userservice.getFoods(this.thisUser.u_id).subscribe((data:any)=>{
      this.orders=data;
      this.grandTotal=0;
      console.log(this.orders);
      this.orders.forEach((element:any)=>{
        this.grandTotal+=(element.f_price*element.quantity);  
      });
      this.grandTotal= this.grandTotal.toFixed(2);
 
    })
  }
  removeItem(item:any){
    this.userservice.deleteCart(item.o_id).subscribe((data:any)=>{
      console.log(data);
    }); 
    this.ngOnInit();
  }
  emptycart(){
   // this.userservice.removeAllCart();
    this.orders=[];
  }
  qtyupdate(f:any){
this.rs.updateCart(f).subscribe((data:any)=>{
  this.ngOnInit();
})
   
  }
 
}
