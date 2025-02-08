import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinalCartModel } from './final-cart-model';

@Injectable({
  providedIn: 'root'
})
export class FinalCartService {

  baseUrl="https://apnapharmacy.stackroute.io"

  constructor(private http: HttpClient) { }

 

  public getCart(email:any){
    console.log("hello");
    console.log(email)
    return this.http.get<FinalCartModel[]>(this.baseUrl+"/cart-service/cart/getCart/"+email);
  }

  public addItemToCart(data:FormData):Observable<any>{
    return this.http.post<any>(this.baseUrl+"/cart-service/cart/addItem",data);
  }

  public removeItemFromCart(productId: string, customerEmail:any){
    return this.http.delete<any>(`${this.baseUrl}/cart-service/cart/removeItem/${productId}/${customerEmail}`);
  }
}
