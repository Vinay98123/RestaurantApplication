import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { RestaurantService } from '../restaurant.service';
import { EncrDecrSeviceService} from '../encr-decr-sevice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myimage:string="assets/Images/Restaurant.jpg"

  
  signin:  any;
  protected aFormGroup:any;
  captchaResponse:any;
  
  constructor(private route:Router, private rs:RestaurantService, private toast: NgToastService,private EncrDecr:EncrDecrSeviceService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.rs.getAllUserData().subscribe((data: any) => {  
      this.signin = data;
      console.log(data)
    });

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
   
  }
  siteKey:string="6LdD2jImAAAAAOUUy7sslj6gsw4uDnpWse8uL9Il";
  login(loginForm: any) {
    console.log(loginForm)
    let i = 0;
    for (i = 0; i < this.signin.length; i++) {
      if (loginForm.un == this.signin[i].u_email && loginForm.pwd == this.EncrDecr.get('123456$#@$^@1ERF',this.signin[i].u_pass)) {
        if (this.signin[i].u_type == "Admin") {
          this.rs.loggedIn = true;
          Swal.fire({ 
                  position: 'center',
                  icon: 'success',
                  title: 'Login Successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
                this.rs.setUser(this.signin[i])
          this.route.navigate(['admin']);
        } else {
          this.rs.loggedIn = true;
          this.toast.success({detail:"SUCCESS MESSAGE", summary:"WELCOME "+ this.signin[i].u_name +" TO PARADISE RESTAURANT",duration:1000})
          this.rs.setUser(this.signin[i])
          this.route.navigate(['user']);
        } 
          
         break;
      }
    } 
     if (i == this.signin.length)
     this.toast.error({detail:"ERROR MESSAGE", summary:"LOGIN FAILED", duration:1000});
  }}