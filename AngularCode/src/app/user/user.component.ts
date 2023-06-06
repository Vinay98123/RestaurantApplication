import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
}) 
export class UserComponent implements OnInit {
  thisUser:any;
  foodList: any;
  // searchKey:string ="";
  // public searchTerm : string=' ';
  public totalItem:number=0;
  location: any;
  userdetails:any;
  // public filterCategory : any;
  constructor(private rs: RestaurantService,private userservice:UserService,private router:Router,private route:ActivatedRoute,private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.thisUser=this.rs.getUser();
    this.rs.getAllFoods().subscribe((data: any) => {
      console.log(data);
      this.foodList = data;

 
    });

    this.userservice.getLocation().subscribe(response => {
      this.location = response;
    });
    
    this.userservice.getCount(this.thisUser.u_id).subscribe((data:any)=>{
      this.totalItem=data;
    })

    

    // this.authService.authState.subscribe((user) => {
    //   this.userdetails = user;
    //   if(user != null){
    //   console.log(this.userdetails.email);
    //   }
    // });

  }
  addtocart(item:any){
    console.log(item);
    this.rs.insertOrder(item).subscribe((data:any)=>{
      Swal.fire({ 
        position: 'center',
        icon: 'success',
        title: ' Item Added Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.userservice.getCount(this.thisUser.u_id).subscribe((data:any)=>{
      this.totalItem=data;
    })
  }
  searchh(value:any){   
    console.log(value);
    this.rs.searchcategory(value).subscribe((data:any)=>{
     console.log(data);
     this.foodList=data;
})
  }
  search(value: any) {
    console.log(value.search);
    this.rs.searchbyname(value.search).subscribe((data: any) => {
      console.log(data);
      this.foodList = data;
});
}
reload() {
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], { relativeTo: this.route });
}
}