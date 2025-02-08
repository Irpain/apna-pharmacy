import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterService } from '../Service/register.service';
import { UserRegistration } from '../Service/user-registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  user : UserRegistration = new UserRegistration();
  registerData: RegisterService;
  to: any;
  registerForm! : FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router , private formbuilder: FormBuilder, private  registerService : RegisterService) {
    
    this.registerForm = this.formbuilder.group({

      name: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(5) ]),
      Confirmpassword: new FormControl("", [Validators.required,Validators.minLength(5) ]),
    },
    {validators:this.Mustmatch('password','Confirmpassword')}
    )
  }
    

  ngOnInit(): void {
  }
  

 registerNow(){
      console.log(this.registerForm.get("name"));
      console.log(this.registerForm.get("username"));
      console.log(this.registerForm.get("password"));
      console.log(this.registerForm.get("Confirmpassword"));
      

      this.registerService.registerApi(this.user).subscribe (
        (data)=> {
          console.log("The registration form has been submitted with these objects" + data);
          Swal.fire(
            "Registration is Successful",
            "You are registered Successfully!",
            "success"
          );
          this.router.navigate(["/login"]);
         },
         (error) => {
          alert("exception occured");
         }
         
        );
     }    


   
    
 get f(){
  return this.registerForm.controls;
 }

 Mustmatch(password:any, Confirmpassword:any)
 {
  return(formGroup :FormGroup)=>{

    const passwordcontrol = formGroup.controls[password];
    const conpasswordcontrol =  formGroup.controls[Confirmpassword];

    if(conpasswordcontrol.errors && !conpasswordcontrol.errors['Mustmatch']){
      return; }

    if(passwordcontrol.value !== conpasswordcontrol.value)
    {
      conpasswordcontrol.setErrors({Mustmatch: true});
    }
    else
    {
      conpasswordcontrol.setErrors(null);
    }
    }
  }


 }
