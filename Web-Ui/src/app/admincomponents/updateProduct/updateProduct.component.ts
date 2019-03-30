import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Producsts } from 'src/app/models/products';

@Component({
  selector: 'app-updateProduct',
  templateUrl: './updateProduct.component.html',
  styleUrls: ['./updateProduct.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private product:ProductService,
    private activeRoute:ActivatedRoute) { }
  products:any={}

  param
  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
     this.param =params["productID"],
     this.getOneProduct(params["productID"])
    })
  }


  updateProduct(){
    this.product.updateProduct(this.param,this.products)
  }


  getOneProduct(productID:string){
    this.product.getProduct(productID).subscribe(data=>{
      this.products=data
    })
  }


  options = [
    { name: "GPU", value: "GPU" },
    { name: "Desktop", value: "Desktop" },
    { name: "CPU", value: "CPU" },
    { name: "Laptop", value: "laptop" },
    { name: "Modem", value: "Modem" },
    { name: "Motherboard", value: "Motherboard" },
    { name: "Mouse Keyboard", value: "Mouse Keyboard" },
    { name: "USB", value: "USB" },
   
  ]

}
