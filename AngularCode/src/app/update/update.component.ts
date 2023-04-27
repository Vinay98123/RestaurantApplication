import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // food: any;

  constructor(private rs: RestaurantService, private route:Router) { }

  ngOnInit(): void {
  }
//   register(regForm:any){
//     alert(regForm);
//     console.log(regForm);
//     this.rs.update(regForm).subscribe((data:any)=>
//     {
//       this.route.navigate(['admin']);
// });
// }
 }
