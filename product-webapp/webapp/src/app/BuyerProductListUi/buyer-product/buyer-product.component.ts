import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BuyerProductServiceService } from 'src/app/Service/buyer-product-service.service';
import { ProductModel } from 'src/app/Service/product-model';
import { FAllComponent } from 'src/app/Header&Footer/f-all/f-all.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FinalCartService } from 'src/app/Service/final-cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-buyer-product',
  templateUrl: './buyer-product.component.html',
  styleUrls: ['./buyer-product.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service : BuyerProductServiceService,private Cartservice: FinalCartService ) {
   }

   Productsmodel = [];
   productId : string = localStorage.getItem("productId");
 
   image: any;
   customerEmail : string = localStorage.getItem("email");
  

  ngOnInit(): void {
    this.service.getAllProduct().subscribe(
      (x:any[])=> {console.log(x);
      this.Productsmodel=x;}

     
    );


  }

  searchText: string;

  // getAllProduct()
  // {
  //   this.service.getAllProduct().subscribe(
  //     data => {this.mod=data},
  //     error => {
  //       this.mod =[];
  //       console.log(error);
  //     }
  //   );
  // }
  getProductById(productId : string) {
    this.service.getProductById(productId).subscribe(
      (data) => {
        
        console.log(data);
        localStorage.setItem("productId",data.productId);
        this.router.navigate(["/product-description"]);
      },
       (error)=> {
        console.log(error)
      }
    )
  }


  saveData(data:any){
    localStorage.setItem('productId', data.productId);
    localStorage.setItem('productCategory', data.productCategory);
    localStorage.setItem('productCity', data.city);
    // if(localStorage.getItem("userRole")!='"seller"'){
    //   this.router.navigateByUrl("/navbar/productDetails")
    // }

  }

  Addtocart(Id: any){
    this.productId = Id;
    var image = new FormData();
    image.append('customerEmail',JSON.parse(this.customerEmail)) ;
    console.log(image,"customer email coming");
    image.append('productId',this.productId) ;
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

  // ProductDescription(){
    
  // }
}
