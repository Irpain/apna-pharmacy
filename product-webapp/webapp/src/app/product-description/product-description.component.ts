import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FinalCartService } from '../Service/final-cart.service';
import { ProductDescriptionService } from '../Service/product-description.service';
import { ProductModel } from '../Service/product-model';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

public product: ProductModel;
 productId : string = localStorage.getItem("productId");
 productDetails: any;
 image: any;
 customerEmail : string = localStorage.getItem("email");
  constructor(private productDescriptionService: ProductDescriptionService,private Cartservice: FinalCartService) { }

  public getProduct(productId: string) {

    this.productDescriptionService.getProduct(productId).subscribe(x=>{
      this.productDetails=x
    console.log(this.productDetails);this.image='data:image/jpg;base64,'+this.productDetails.productImage;
    console.log(this.image);});
    
    }
    ngOnInit(): void {
      this.getProduct(this.productId);
      
    }

    Addtocart(){
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
  }

 

