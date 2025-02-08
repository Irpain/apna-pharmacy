import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerProductServiceService } from 'src/app/Service/buyer-product-service.service';
import { FinalCartService } from 'src/app/Service/final-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-section-loggedin',
  templateUrl: './home-section-loggedin.component.html',
  styleUrls: ['./home-section-loggedin.component.css']
})
export class HomeSectionLoggedinComponent implements OnInit {
  customerEmail : string = localStorage.getItem("email");
  
  constructor(private route: ActivatedRoute, private router: Router,private service : BuyerProductServiceService, private Cartservice: FinalCartService) { }

  Productsmodel = [];
  ngOnInit(): void {
    this.service.getAllProduct().subscribe(
      (x:any[])=> {console.log(x);
      this.Productsmodel=x;}

     
    );
  }
  getProductById(productId : string) {
    this.service.getProductById(productId).subscribe(
      (data) => {
        
        console.log(data);
        localStorage.setItem("productId",data.productId);
        this.router.navigate(["/product-description"]);
      },
       (error)=> {
        console.log(error);
      }
    )
  }
  Addtocart(productId : string){
    var image = new FormData();
    image.append('customerEmail',JSON.parse(this.customerEmail)) ;
    console.log(image,"customer email coming");
    image.append('productId',productId) ;
    console.log(image,"both appended");

    this.Cartservice.addItemToCart(image).subscribe((data)=>{
     
        console.log(data);
        Swal.fire(
          "Item is added to the cart!!"
        );
    

      },
      (error)=>{
        console.log(error);
      }

    )


  }
}
