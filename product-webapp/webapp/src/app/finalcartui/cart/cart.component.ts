import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinalCartModel } from 'src/app/Service/final-cart-model';
import { FinalCartService } from 'src/app/Service/final-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: any;
  email: string = localStorage.getItem("email");
  productId:string;
  
  constructor(private cartService:FinalCartService, private route: ActivatedRoute, private router: Router, @Inject(DOCUMENT) private _document: Document) { }

  // public getCart(email:any) {
  //   return this.cartService.getCart
  // }

  ngOnInit(): void {
    // this.email= localStorage.getItem("email");

    
    console.log(this.email);
    this.getCart();
  }
  getCart(){
    
    var nun;
    
    // data.append('customerEmail',JSON.stringify(this.email));
    // console.log(data,"nun  data");
    this.cartService.getCart(JSON.parse(this.email)).subscribe((y:any)=>{
      console.log(y);
      console.log("inside");
      this.carts=y;
      console.log(this.carts);
    
      console.log(this.carts.cartProducts);
    })
    // JSON.parse(this.email)
  }
  
  addMore(Id: string){
    this.productId = Id;
    var image = new FormData();
    image.append('customerEmail',JSON.parse(this.email)) ;
    console.log(image,"customer email coming");
    image.append('productId',this.productId) ;
    console.log(image,"both appended");

    this.cartService.addItemToCart(image).subscribe((data)=>{
     
        console.log(data);
        this._document.defaultView.location.reload();
        

      },
      (error)=>{
        console.log(error);
      })
      
    }

    removeOne(Id: string){
      this.productId = Id;
    // var image = new FormData();
    // image.append('productId',this.productId) ;
    // console.log(image,"productId coming");
    // image.append('customerEmail',"aooo@gmail.co") ;
    // console.log(image,"both appended");

    this.cartService.removeItemFromCart(this.productId,JSON.parse(this.email)).subscribe((data)=>{
     
        console.log(data);
        this._document.defaultView.location.reload();
        

      },
      (error)=>{
        console.log(error);
      })

    }

}
