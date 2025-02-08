import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductDescriptionService {

  baseUrl ="https://apnapharmacy.stackroute.io"

  constructor(private http:HttpClient) {}

  

  public getProduct(productId: string):Observable<ProductModel>{
    return this.http.get<ProductModel>(this.baseUrl+"/product-service/product/"+productId);
  }

 


}
