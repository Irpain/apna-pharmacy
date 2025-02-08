
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators , FormBuilder } from '@angular/forms';
import { SellerServiceService } from 'src/app/Service/seller-service.service';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  active: number = 0;
  flag: boolean = false;
  product: any ;
  productTosend: any;
  url: any = '';
  allProducts: any = [];
  productsList: any = [];
  selectedFile: any;
  sellerEmail:string=localStorage.getItem("email");

  constructor(private addproductservice: SellerServiceService ,private builder : FormBuilder,@Inject(DOCUMENT) private _document: Document) { 
    this.productInfoForm = this.builder.group
      ({
        productName: new FormControl('', [Validators.required]),
        productPrice: new FormControl('', [Validators.required]),
        productCategory: new FormControl('', [Validators.required]),
        productBrand: new FormControl('', [Validators.required]),
        productDescription: new FormControl('', [Validators.required]),
        // productQuantity:new FormControl('',[Validators.required]),
        // sellerEmail:new FormControl('',[Validators.required]),
        // sellingPrice:new FormControl('',[Validators.required]),
        file:new FormControl('',[Validators.required])
      });
  }

  ngOnInit(): void {}

  productInfoForm :FormGroup;

  get productName() {
    return this.productInfoForm.get('productName');
  }
  get productPrice() {
    return this.productInfoForm.get('productPrice');
  }
  get file() {
    return this.productInfoForm.get('file');
  }
  get productDescription() {
    return this.productInfoForm.get('productDescription');
  }
  get productBrand() {
    return this.productInfoForm.get('productBrand');
  }
  get productCategory() {
    return this.productInfoForm.get('productCategory');
  }
 
  myFile(data:any){
    console.log("Ram",data);
    this.selectedFile=data.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(this.selectedFile)
    reader.onload=(data:any)=>{
    this.url=data.target.result
    }
  }


  myProductInfoFunction() {
    const u = this.productInfoForm.value;
    console.log("product to send",u);

    this.active=2;
     this.product={
        productName:this.productInfoForm.value.productName,
        productPrice:this.productInfoForm.value.productPrice,
        productDescription:this.productInfoForm.value.productDescription,
        productQuantity:this.productInfoForm.value.productQuantity,
        // description:this.productInfoForm.value.description,
        productCategory:this.productInfoForm.value.productCategory,
        productBrand:this.productInfoForm.value.productBrand,
        file:this.url
      }
      this.allProducts.push(this.product);

      this.productTosend={
        productName:this.productInfoForm.value.productName,
        productPrice:this.productInfoForm.value.productPrice,
        productDescription:this.productInfoForm.value.productDescription,
        productQuantity:this.productInfoForm.value.productQuantity,
        // description:this.productInfoForm.value.description,
        productCategory:this.productInfoForm.value.productCategory,
        productBrand:this.productInfoForm.value.productBrand,
        file:this.selectedFile,
        sellerEmail:JSON.parse(this.sellerEmail)
      }
      
      this.productsList.push(this.productTosend);
      console.log(this.productsList.selectedFile);
      console.log(this.productsList);
      console.log("Submitted");
    for (var i = 0; i < this.productsList.length; i++) {
      var image = new FormData();
      var data;
      data = image.append('file', this.productsList[i].file, this.productsList[i].file.name);
      console.log("DATA",data);
      delete this.productsList[i]['file'];
      image.append('product', JSON.stringify(this.productsList[i]));
      console.log(this.productsList.sellerEmail);
      console.log("IMAGE",image);
      console.log("data with product object");
      this.addproductservice.addProduct(image).subscribe(a => {
        console.log(a);
        Swal.fire(
          "Added Product Successfully",
          
        );

        this._document.defaultView.location.reload();
      },
      (error)=>{
        console.log(error);
      }
      )
    }
    this.productInfoForm.reset();
  }
  // addMore(){
  //   this.active=0;
  //   this.productInfoForm.reset();
  // }
}


