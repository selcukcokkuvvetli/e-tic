import { Component, OnInit } from '@angular/core';
import { FirstpageService } from 'src/app/services/firstpage.service';
import { ActivatedRoute } from '@angular/router';
import { Producsts } from 'src/app/models/products';
import { Firstpage } from 'src/app/models/firstpage';
import { ProductService } from 'src/app/services/product.service';
import { Cardmodel } from 'src/app/models/cardmodel';
import { CardService } from 'src/app/services/card.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firstpage:FirstpageService,
    private produck:ProductService,
    private card:CardService,
    private user:AuthorizationService) { }

  topItem:Producsts[]
  slider:Firstpage[]
  oneProduct:Producsts
  cardmodel:any={}  
  
  ngOnInit() {
    this.getTopItem()
    this.getSlider()
    this.getuserID()
    
  }
  addProductBasket(product: Producsts) {
    
    var cards = new Cardmodel()
    cards.productID=product._id
    cards.userID= this.userID
    this.card.postCard(cards)
  }
  
  postCard(){
    this.card.postCard(this.cardmodel)
  }
  

  get userout(){
    return this.user.isUser()
  }

  userID: string
  getuserID(){
    this.userID = this.user.getuserID()
  }



  getTopItem(){
    this.firstpage.topItem().subscribe(data=>{
      this.topItem=data
    })
  }
  getSlider(){
    this.firstpage.getSlider().subscribe(data=>{
      this.slider=data
    })
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
