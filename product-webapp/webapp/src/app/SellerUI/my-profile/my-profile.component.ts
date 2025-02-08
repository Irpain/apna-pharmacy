import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerServiceService } from 'src/app/Service/seller-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  imageData: string;

  constructor( private service : SellerServiceService) { }

  ngOnInit(): void {
    this.service.getProfile(localStorage.getItem("email")).subscribe((x:any)=>{
      this.login.get("name").setValue(x.shop);
      console.log(x);
      this.login=x;
    });
  }
  submit(value:any){
    console.log("Submitted",value);
    this.save();
  }
  login = new FormGroup({
    shopAddress: new FormControl('' , Validators.required),
    file:new FormControl(''),
    sellerEmail: new FormControl('' , [Validators.required,Validators.email]),
    shopName: new FormControl('' ,Validators.required),
    shopDescription:new FormControl('' ,Validators.required)
  });
  onFileSelected(event:Event){
    const file= (event.target as HTMLInputElement).files[0];
    this.login.patchValue({image:file});
    const allowedMimeTypes = ["image/png","image/jpeg","image/jpg"];
    if(file && allowedMimeTypes.includes(file.type)){
      const reader = new FileReader();
      reader.onload=()=>{
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
}
get shopAddress() {
  return this.login.get('shopAddress');
}
get sellerEmail() {
  return this.login.get('sellerEmail');
}
get file() {
  return this.login.get('file');
}
get shopName() {
  return this.login.get('shopName');
}
get shopDescription() {
  return this.login.get('shopDescription');
}
  save() {
    console.log("yes")
    var image = new FormData();
    var data = image.append('shop', JSON.stringify(this.login.value));
    console.log("no", data)
    this.service.update(image).subscribe(a => {
      console.log(a);
    });
  }
}
