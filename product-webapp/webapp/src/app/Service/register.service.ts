import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegistration } from './user-registration';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl ="https://apnapharmacy.stackroute.io";
  constructor(private http:HttpClient) { }

  

  registerApi (data : UserRegistration) : Observable<any> {
    return this.http.post<any>(this.baseUrl + "/user-service/api/Buyer", data);
  }
}
