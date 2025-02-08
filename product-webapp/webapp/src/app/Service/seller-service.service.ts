import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  
 private baseUrl:"https://apnapharmacy.stackroute.io";

//   baseUrl ="http://localhost:8080";
 // private baseUrl: string = 'http://localhost:9000/product';

  constructor(private http: HttpClient) { }

  public addProduct(data:FormData){
    console.log(data);
    return this.http.post(this.baseUrl+"/product-service/product/addproduct",data);

    return this.http.post(this.baseUrl +"/product-service/product/addproduct",data);
  }

  public getProduct(sellerEmail:any){
    return this.http.get<ProductModel[]>(this.baseUrl +"/product/getbyemail/"+sellerEmail);
  }
  public getProfile(sellerEmail:any){
    return this.http.get(this.baseUrl +"/product-service/shop/getbyemail/"+sellerEmail);
  }
  public update(p:FormData){
    console.log(p);
    return this.http.post(this.baseUrl +"/product-service/shop/addshop",p);
  }
  public deleteProduct(productId:any){
    return this.http.delete<any>(this.baseUrl +"/product-service/product/deleteproduct/"+productId);
  }
}
