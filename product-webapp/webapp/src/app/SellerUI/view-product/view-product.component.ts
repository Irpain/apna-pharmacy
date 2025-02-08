import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/Service/product-model';
import { SellerServiceService } from 'src/app/Service/seller-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productArray:ProductModel[]=[];
  productId : string;
  sellerEmail : string =localStorage.getItem("email");
  constructor(private route: ActivatedRoute, private router: Router, private service : SellerServiceService,
    @Inject(DOCUMENT) private _document: Document) {
    
   }

  ngOnInit(): void {
    // this.service.getProduct(JSON.parse(this.sellerEmail)).subscribe(x=>{
    //   console.log(x);
    //   this.productArray=x;
    // },
    // (error)=>{
    //   console.log(error);
    // });
    this.getProduct();

  }
  getProduct(){
    this.service.getProduct(JSON.parse(this.sellerEmail)).subscribe(x=>{
      console.log(x);
      this.productArray=x;
    },
    (error)=>{
      console.log(error);
    });
  }
  deleteProduct(productId){
    console.log("jaat",productId);
    this.service.deleteProduct(productId).subscribe((data)=>{
      console.log(data);
      Swal.fire(
        "Deleted Product Successfully",
        
      );
      // this.router.navigate(["/view-product"]);
     // this._document.defaultView.location.reload();
    },
    (error)=>{
      console.log(error);
      console.log("bas yehi challa h ");
    }
    
    );
  }
}
