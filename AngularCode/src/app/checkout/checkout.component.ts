import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
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
    this.grandTotal=this.grandTotal*100;
  })
  
}

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Razor Pay",
    "description": "Test Transaction",
    "image": "/",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://goodluckhours.com/payment-successful/",
    "prefill": {
        "name": "Rajor Pay",
        "email": "payment@rp.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "india."
    },
    "theme": {
        "color": "#3399cc"
    }

  };
rzp1:any;
pay(total:any){
  this.options.amount=total;
  this.rzp1 = new this.rs.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
 
}
}




