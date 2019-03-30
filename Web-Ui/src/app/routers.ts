
import { Routes } from "@angular/router";
import { HomeComponent } from "./Components/Home/Home.component";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { ProductsComponent } from "./Components/products/products.component";
import { CardComponent } from "./Components/card/card.component";
import { AdminHomeComponent } from "./admincomponents/adminHome/adminHome.component";
import { AdminAllProductsComponent } from "./admincomponents/adminAllProducts/adminAllProducts.component";
import { AdminAllSlidersComponent } from "./admincomponents/adminAllSliders/adminAllSliders.component";
import { ProductDetaildComponent } from "./Components/productDetaild/productDetaild.component";
import { AdminLoginComponent } from "./admincomponents/adminLogin/adminLogin.component";
import { AdminSliderComponent } from "./admincomponents/adminSlider/adminSlider.component";
import { AdminProductComponent } from "./admincomponents/adminProduct/adminProduct.component";
import { UpdateSliderComponent } from "./admincomponents/updateSlider/updateSlider.component";
import { UpdateProductComponent } from "./admincomponents/updateProduct/updateProduct.component";
import { SearchComponent } from "./Components/search/search.component";




export const routers:Routes = [
    //users
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'products/:category',component:ProductsComponent},
    {path:'card',component:CardComponent},
    {path:'product/:productID',component:ProductDetaildComponent},
    {path:'search/:name',component:SearchComponent},
    
    //admin
    {path:'adminhome',component:AdminHomeComponent},
    {path:'allproducts',component:AdminAllProductsComponent},
    {path:'allsliders',component:AdminAllSlidersComponent},
    {path:'adminlogin',component:AdminLoginComponent},
    {path:'adminslider',component:AdminSliderComponent},
    {path:'adminproduct',component:AdminProductComponent},
    {path:'updateSlider/:sliderID',component:UpdateSliderComponent},
    {path:'updateProduct/:productID',component:UpdateProductComponent},

    {path:'**',redirectTo:'home',pathMatch:'full'}
]; 
