import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './SellerUI/add-product/add-product.component';
import { HomeComponent } from './SellerUI/home/home.component';
import { MyProfileComponent } from './SellerUI/my-profile/my-profile.component';
import { OrderHistoryComponent } from './SellerUI/order-history/order-history.component';
import { ViewProductComponent } from './SellerUI/view-product/view-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './Home-Landing/header/header.component';
import { HomeSectionComponent } from './Home-Landing/home-section/home-section.component';
import { FooterComponent } from './Home-Landing/footer/footer.component';
import { BuyerComponent } from './BuyerProductListUi/buyer-product/buyer-product.component';
import { CartComponent } from './finalcartui/cart/cart.component';
import { HeaderLoggedinComponent } from './Home-Landing-After-Loggedin/header-loggedin/header-loggedin.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
 {path:'login',     component:LoginComponent},
  {path:'register',  component:RegisterComponent},



  // {path:'signup',  component:SignupComponent},

  {path:'',component:HeaderComponent},
  {path:'profile',component:MyProfileComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'view-product',component:ViewProductComponent},
  {path:'order-history',component:OrderHistoryComponent},
  {path:'SellerHome',component:HomeComponent},
  {path:'buyerproduct',component:BuyerComponent},
  {path:'finalcart',component:CartComponent},
  {path:'app-header-loggedin',component:HeaderLoggedinComponent},
  {path:'product-description',component:ProductDescriptionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponent1 = [LoginComponent,RegisterComponent, SignupComponent]
export const routingComponents=[HomeComponent,MyProfileComponent,AddProductComponent,ViewProductComponent,OrderHistoryComponent]


