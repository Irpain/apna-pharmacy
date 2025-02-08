import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../Service/authentication-service.service';
import { LoginAdvancedService } from '../Service/login-advanced.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  to: any;
  loginForm : FormGroup;
  message : string;
  success:string="Logged in successfully!"


  constructor(private route: ActivatedRoute, private router: Router,
    private authService : AuthenticationServiceService, private login:LoginAdvancedService) {
    this.loginForm = new FormGroup({

    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required])
    })
    

  }
   
 
 ngOnInit(): void {
  }

  get username(){
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

 get f(){
    return this.loginForm.controls;
   }

   loginProcess(){

    //console.log(this.username.value)
    localStorage.setItem('email',JSON.stringify(this.username.value))


    this.authService.login(this.loginForm.value).subscribe((response:any) =>{
        //console.log(response.token);
        //console.log(response);
        localStorage.setItem("email",this.loginForm.value.email);
        Swal.fire(
          "Logged In Succesfully",
          "You have Logged In Succesfully!",
          "success"
        );

          //console.log("home")
          this.router.navigate(["/"]);
    },
    error => {
      this.message="*Incorrect username and password";
    })


  }


  forLogin(){
    localStorage.setItem('email',JSON.stringify(this.username.value));

    console.log(localStorage);
    this.login.generateToken(this.loginForm.value).subscribe(
      (data:any) => {
      console.log('success');
      console.log(data);

      Swal.fire(
        "Logged In Succesfully",
        "You have Logged In Succesfully!",
        "success"
      );
      
      this.login.loginUser(data.token);

      this.login.getCurrentUser(this.username.value, data.token).subscribe(
          (user:any) => {
            this.login.setUser(user);
            console.log(user);

            //redirect
            this.router.navigate(["/app-header-loggedin"]);

            
            
          }
      )

      },
      (error) => {
        console.log('Error');
        console.log(error);
        this.message="*Incorrect username and password";
        
        
      })
      
  }

  goToRegister(): void{
    this.router.navigate(["/register"]);
  }
}

