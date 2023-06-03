import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { RestaurantService } from '../restaurant.service';
import { EncrDecrSeviceService} from '../encr-decr-sevice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GoogleInitOptions, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

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
  user: any;
  private accessToken = '';
  loggedIn: boolean = this.rs.getGoogleLoginStatus();
  
  constructor(private route:Router, private rs:RestaurantService, private toast: NgToastService,private EncrDecr:EncrDecrSeviceService,private formBuilder: FormBuilder,private httpClient: HttpClient,private authService: SocialAuthService) { }

  googleLoginOptions: GoogleInitOptions = {
    oneTapEnabled: false, // default is true
    scopes: 'https://www.googleapis.com/auth/calendar.readonly'
  };


  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  ngOnInit(): void {
    this.rs.getAllUserData().subscribe((data: any) => {  
      this.signin = data;
      console.log(data)
    });

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    if (this.rs.getGoogleLoginStatus() == false) {

      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(this.user.email);
        this.rs.setGoogleLoginStatusIn();
          this.rs.setloggedIn();

          this.toast.success({detail:"SUCCESS MESSAGE", summary:"WELCOME "+ this.user.name +" TO PARADISE RESTAURANT",duration:3000})

        // if (this.loggedIn == true) {
          this.route.navigate(['user'])
        // }
      });
    }
   
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
          this.toast.success({detail:"SUCCESS MESSAGE", summary:"WELCOME "+ this.signin[i].u_name +" TO PARADISE RESTAURANT",duration:3000})
          this.rs.setUser(this.signin[i])
          this.route.navigate(['user']);
        } 
          
         break;
      }
    } 
     if (i == this.signin.length)
     this.toast.error({detail:"ERROR MESSAGE", summary:"LOGIN FAILED", duration:2000});
  }}