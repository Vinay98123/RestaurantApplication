import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public orders: any;
  grandTotal: any;
  thisUser: any;
  constructor(private userservice: UserService, private rs: RestaurantService) {
    this.grandTotal = 0;
    this.pastDateTime();

  }

  ngOnInit(): void {
    this.thisUser = this.rs.getUser();
    this.userservice.getFoods(this.thisUser.u_id).subscribe((data: any) => {
      this.orders = data;
      this.grandTotal = 0;
      console.log(this.orders);
      this.orders.forEach((element: any) => {
        this.grandTotal += (element.f_price * element.quantity);
      });
      this.grandTotal = this.grandTotal.toFixed(2);
      this.grandTotal = this.grandTotal * 100;
    })

  }
  min:any = "2021-06-24T11:30";
 
  pastDateTime(){
    var tdate:any = new Date();
    var date:any = tdate.getDate();
    if(date < 10) {
      date = "0" + date;
    }
   var month:any = tdate.getMonth() + 1;
   if(month < 10){
    month = "0" + month;
   }
 var year:any = tdate.getFullYear();
 var hours:any = tdate.getHours();
 var minutes:any = tdate.getMinutes();
 this.min = year + "_" + month + "_" + date + "T" +hours + ":" + minutes;
console.log(this.min);
}   
values:any;
onChange(value:any){
  var todate = new Date().getTime(); 
  var selectDate:any = new Date(value).getTime();
 if (todate > selectDate) {
  this.values = "";
    alert(" You can't Choose previous date and time");
 }  
  console.log("Today" + todate);
  console.log("" + selectDate); 
}


  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Razor Pay",
    "description": "Test Transaction",
    "image": "/",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "http://localhost:4200",
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
  rzp1: any;
  pay(total: any) {
    this.options.amount = total;
    this.rzp1 = new this.rs.nativeWindow.Razorpay(this.options);
    this.rzp1.open();

  }
}




