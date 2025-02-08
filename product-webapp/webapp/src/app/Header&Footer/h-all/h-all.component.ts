import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinalCartService } from 'src/app/Service/final-cart.service';

@Component({
  selector: 'app-h-all',
  templateUrl: './h-all.component.html',
  styleUrls: ['./h-all.component.css']
})
export class HAllComponent implements OnInit {

  constructor(private service : FinalCartService,private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
  }

  Email : string = localStorage.getItem("email");
  carts: any;

  viewCart(){
    
    // const form = document.querySelector('form')
    // var data= new FormData();
    // console.log(this.email);
    var nun;
    
    // data.append('customerEmail',JSON.stringify(this.email));
    // console.log(data,"nun  data");
    this.service.getCart(JSON.parse(this.Email)).subscribe((y:any)=>{
      console.log(y);
      console.log("inside");
      this.carts=y;
      this.router.navigate(["/finalcart"]);
      console.log(this.carts);
    
      console.log(this.carts.cartProducts);
    })
  }

  logout(){
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('productid');
    localStorage.removeItem('email');
}
}
