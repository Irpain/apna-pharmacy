import { Component } from '@angular/core';
import { BuyerProductServiceService } from 'src/app/Service/buyer-product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent {
  
  constructor(private service : BuyerProductServiceService){}

  Productsmodel = [];
  ngOnInit(): void {
    this.service.getAllProduct().subscribe(
      (x:any[])=> {console.log(x);
      this.Productsmodel=x;}

     
    );
  }
  loginFirst() {
    Swal.fire(
      "You need to login first!!"
    );
  }

}
