import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdvancedService {

  baseUrl = "https://apnapharmacy.stackroute.io";
  constructor(private http: HttpClient) { }
  

  public getCurrentUser(username:String, token): Observable<any>{
    
    
    return this.http.get(this.baseUrl+'/authentication-service/api/user/'+username , { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})
  });
  }
  public generateToken(loginData: any){
    return this.http.post(this.baseUrl+'/authentication-service/authenticate',loginData);
}

public loginUser(token){
  localStorage.setItem("token", token);
  console.log(token);
  return true;
}

public isLoggedin(){

  let tokenStr = localStorage.getItem("token");
  if(tokenStr==undefined || tokenStr =='' || tokenStr==null){
    return false;
  }else{
    return true;
  }
}


public logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return true;
}

public getToken(){
  return localStorage.getItem('token');
}


public setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}

public getUser(){
  let userStr = localStorage.getItem("user");
  if(userStr != null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

public getUserRole(){
  let user = this.getUser();
  return user.role;
}

}
