import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routers } from './routers';
import { AuthorizationService } from './services/authorization.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthIntersepterService } from './services/auth-intersepter.service';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/Home/Home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';
import { CardComponent } from './Components/card/card.component';
import { ProductDetaildComponent } from './Components/productDetaild/productDetaild.component';
import { ProductsComponent } from './Components/products/products.component';
import { AdminAllProductsComponent } from './admincomponents/adminAllProducts/adminAllProducts.component';
import { AdminAllSlidersComponent } from './admincomponents/adminAllSliders/adminAllSliders.component';
import { AdminFooterComponent } from './admincomponents/adminFooter/adminFooter.component';
import { AdminHomeComponent } from './admincomponents/adminHome/adminHome.component';
import { AdminNavbarComponent } from './admincomponents/adminNavbar/adminNavbar.component';
import { AdminProductComponent } from './admincomponents/adminProduct/adminProduct.component';
import { AdminSliderComponent } from './admincomponents/adminSlider/adminSlider.component';
import { CardService } from './services/card.service';
import { FirstpageService } from './services/firstpage.service';
import { AdminLoginComponent } from './admincomponents/adminLogin/adminLogin.component';
import { UpdateProductComponent } from './admincomponents/updateProduct/updateProduct.component';
import { UpdateSliderComponent } from './admincomponents/updateSlider/updateSlider.component';
import { DetailsUploadComponent } from './admincomponents/adminProduct/details-upload/details-upload.component';
import { FormUploadComponent } from './admincomponents/adminProduct/form-upload/form-upload.component';
import { ListUploadComponent } from './admincomponents/adminProduct/list-upload/list-upload.component';
import { SearchComponent } from './Components/search/search.component';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      HomeComponent,
      LoginComponent,
      NavbarComponent,
      RegisterComponent,
      CardComponent,
      ProductDetaildComponent,
      ProductsComponent,
      AdminAllProductsComponent,
      AdminAllSlidersComponent,
      AdminFooterComponent,
      AdminHomeComponent,
      AdminNavbarComponent,
      AdminProductComponent,
      AdminSliderComponent,
      AdminLoginComponent,
      UpdateProductComponent,
      UpdateSliderComponent,
      DetailsUploadComponent,
      FormUploadComponent,
      ListUploadComponent,
      SearchComponent
     
      
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routers),
      HttpClientModule,
      FormsModule,
     
   ],
   providers: [AuthorizationService,
      CardService,
      FirstpageService,
     
      ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
