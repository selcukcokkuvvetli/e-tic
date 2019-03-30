import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Producsts } from 'src/app/models/products';
import { Cardmodel } from 'src/app/models/cardmodel';
import { CardService } from 'src/app/services/card.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cardmodel:any={}
  constructor(private activeroute:ActivatedRoute,
    private produck:ProductService,
    private card:CardService,
    private user:AuthorizationService) { }

    products:Producsts[]
    oneProduct:Producsts

  ngOnInit() {
    this.activeroute.params.subscribe(params=>{
      this.getPCategory(params["category"])
    })

    this.getuserID()
    
  }
  addProductBasket(product: Producsts) {
    
    var cards = new Cardmodel()
    cards.productID=product._id
    cards.userID= this.userID
    this.card.postCard(cards)
  }

  userID: string
  getuserID(){
    this.userID = this.user.getuserID()
  }
  get userout(){
    return this.user.isUser()
  }

  getSearch(name:string){
    this.produck.getSearch(name).subscribe(data=>{
      this.products=data
    })
  }
  getPCategory(category:string){
    this.produck.getPCategory(category).subscribe(data=>{
      this.products=data
    })
  }
  getmaxCategory(category:string){
    this.produck.getMaxCategory(category).subscribe(data=>{
      this.products=data
    })
  } 
  getminCategory(category:string){
    this.produck.getMinCategory(category).subscribe(data=>{
      this.products=data
    })
  }
  getOneProduct(productID:string){
    this.produck.getProduct(productID).subscribe(data=>{
      this.oneProduct=data
    })
  }
  postCard(){
    this.card.postCard(this.cardmodel)
  }
  putCard(cardID:string){
    this.card.putCard(this.cardmodel,cardID)
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
