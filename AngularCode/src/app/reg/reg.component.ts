import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { NgToastService } from 'ng-angular-popup';
import { EncrDecrSeviceService } from '../encr-decr-sevice.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  users:any;
  myimage:string="assets/Images/Restaurantgif.gif"
  constructor(private rs: RestaurantService, private route:Router,private toast: NgToastService,private EncrDecr:EncrDecrSeviceService) { }
  ngOnInit(): void {
    this.rs.getAllUserData().subscribe((data:any)=>{
      this.users=data;
    })
  }
  count:any;
  register(registerForm:any){
    //console.log(this.users)
    for(let i of this.users)
    {
      this.count=0;
      if(registerForm.u_email==i.u_email)
      {
        this.toast.warning({summary:"Your  Email Is Already Existed!!!",duration:3000})
        this.route.navigate(['/reg']) 
        this.count=this.count+1;
        break;
      }
    }

    //console.log(this.count);
      if(this.count==0) 
      {
        var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', registerForm.u_pass);
        registerForm.u_pass=encrypted;
        this.rs.insertUser(registerForm).subscribe((data)=>{
          console.log(data);
          this.toast.success({summary:"Registered Successfully",duration:3000}) 
          this.route.navigate(["/login"]);
             
        })
 }

}
}


 
 
