import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  myimage:string="assets/Images/restaurant4.jpg"
  constructor(private rs: RestaurantService, private route:Router) { }

  ngOnInit(): void {
  }
  insert(insertForm:any){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inserted Successfully',
      showConfirmButton: false,
      timer: 1000
    });
    console.log(insertForm);
    this.rs.insert(insertForm).subscribe((data:any)=>
    {
      this.route.navigate(['admin/rest']);
});
}

}
