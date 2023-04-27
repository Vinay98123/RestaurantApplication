import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myimage:string="assets/Images/Restaurant.jpg"
  foodList: any;
  route: any;
  constructor(private rs: RestaurantService) { }

  ngOnInit(): void {
    this.rs.getAllFoods().subscribe((data: any) => {
      console.log(data);
      this.foodList = data;
    });
  
  
  
  }
 


  }

