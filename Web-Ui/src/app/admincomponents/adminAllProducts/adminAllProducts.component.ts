import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Producsts } from 'src/app/models/products';

@Component({
  selector: 'app-adminAllProducts',
  templateUrl: './adminAllProducts.component.html',
  styleUrls: ['./adminAllProducts.component.css']
})
export class AdminAllProductsComponent implements OnInit {

  constructor(private product:ProductService) { }
  allProduct:Producsts[]
  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.product.gelAllProduct().subscribe(data=>{
      this.allProduct=data
    })
  }
  deleteProduct(productID:string){
    this.product.delProduct(productID).subscribe(data=>{
      this.getProduct()
    })
  }
}
