import { Component, OnInit } from '@angular/core';
import { Producsts } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private produck: ProductService,private activeroute:ActivatedRoute,) { }

  ngOnInit() {
    this.activeroute.params.subscribe(params=>{
      this.getSearch(params["name"])
      
    })
    
  }
  products: Producsts[];


  getSearch(name: string) {
    console.log(name);
    this.produck.getSearch(name).subscribe(data => {
      this.products = data;
    });
  }









  options = [
    { name: "GPU", value: "GPU" },
    { name: "Desktop", value: "Desktop" },
    { name: "CPU", value: "CPU" },
    { name: "Laptop", value: "laptop" },
    { name: "Modem", value: "Modem" },
    { name: "Motherboard", value: "Motherboard" },
    { name: "Mouse Keyboard", value: "Mouse Keyboard" },
    { name: "USB", value: "USB" }
  ]

}
