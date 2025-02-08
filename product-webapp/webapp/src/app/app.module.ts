import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents,routingComponent1 } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Home-Landing/material/material.module';

//Login and Registration
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './BuyerProductListUi/buyer-product/buyer-product.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { FooterComponent } from './Home-Landing/footer/footer.component';
import { HeaderComponent } from './Home-Landing/header/header.component';
import { HomeSectionComponent } from './Home-Landing/home-section/home-section.component';
import { SignupComponent } from './signup/signup.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RecommendationBodyComponent } from './Store-Recommendation/recommendation-body/recommendation-body.component';
import { CartComponent } from './finalcartui/cart/cart.component';
import { FooterLoggedinComponent } from './Home-Landing-After-Loggedin/footer-loggedin/footer-loggedin.component';
import { HeaderLoggedinComponent } from './Home-Landing-After-Loggedin/header-loggedin/header-loggedin.component';
import { HomeSectionLoggedinComponent } from './Home-Landing-After-Loggedin/home-section-loggedin/home-section-loggedin.component';
import { ImageComponent } from './SellerUI/image/image.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import { FAllComponent } from './Header&Footer/f-all/f-all.component';
import { HAllComponent } from './Header&Footer/h-all/h-all.component';
import { OrderHomeUiComponent } from './Medicine-order-ui/order-home-ui/order-home-ui.component';
import { SearchPipe } from './search.pipe';
import { LoginHeaderComponent } from './Header-for-login-register/login-header/login-header.component';








@NgModule({
  declarations: [
    AppComponent,
     
    routingComponent1,
    routingComponents,
    BuyerComponent,
    ProductDescriptionComponent,
    FooterComponent,
    HeaderComponent,
    HomeSectionComponent,
    RecommendationBodyComponent,
    CartComponent,
    FooterLoggedinComponent,
    HeaderLoggedinComponent,
    HomeSectionLoggedinComponent,
    ImageComponent,
    FAllComponent,
    HAllComponent,
    OrderHomeUiComponent,
    SearchPipe,
    LoginHeaderComponent
   

    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    HttpClientModule,
 
    
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    FlexLayoutModule,
    // Login and Registration
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatRippleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }