import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  route: any;
  foodList: any;
  food: any;
  deletefood:any;
  constructor(private rs: RestaurantService,private router:Router) {
    this.foodList = "";
    this.food = {
      f_id: "",
      f_name: "",
      f_img: "",
      f_price: "",
      f_desc: "",
      fc_id: ""

    }
  }

  ngOnInit(): void {
   
    {
      this.rs.getAllFoods().subscribe((data: any) => {
        console.log(data);
        this.foodList = data;
      });  
  }}
  update(u1:any){
    this.food=u1;
   
  }
  editFood(u2:any){
    this.rs.update(u2).subscribe((data:any)=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Successfully 😊 ',
        showConfirmButton: false,
        timer: 1000
      });
      this.route.navigate(['rest']);
    })
  }

  search(value: any) {
    console.log(value.search);
    this.rs.searchbyname(value.search).subscribe((data: any) => {
      console.log(data);
      this.foodList = data;
});
}
  delete(f_id: number) {
    const swalWithBootstrapButtons = Swal.mixin({ 
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
      this.rs.DeleteById(f_id).subscribe((data: any) => {
  
        console.log(data); 
        this.deletefood = data;
        this.ngOnInit();
      }); 
     
     
        }
            else if (
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your file is not Deleted :)',
                        'error'
                      )
                    }
              })
            }

            // reload() {
            //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            //   this.router.onSameUrlNavigation = 'reload';
            //   this.router.navigate(['./'], { relativeTo: this.route });
            // }
          }


          
  




