import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './product-model';



@Injectable({
  providedIn: 'root'
})
export class BuyerProductServiceService {

  baseUrl= "https://apnapharmacy.stackroute.io";
  constructor( private http:HttpClient) { }
  
   

  
  getAllProduct() 
  {
    
    return this.http.get<ProductModel[]>(this.baseUrl + "/product-service/product/products");
  }
  getProductById(productId : string) {
    return this.http.get<any>(this.baseUrl +"/product-service/product/"+productId);
  }
}






