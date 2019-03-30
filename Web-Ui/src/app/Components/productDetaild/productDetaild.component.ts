import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Producsts } from 'src/app/models/products';
import { Cardmodel } from 'src/app/models/cardmodel';
import { CardService } from 'src/app/services/card.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-productDetaild',
  templateUrl: './productDetaild.component.html',
  styleUrls: ['./productDetaild.component.css']
})
export class ProductDetaildComponent implements OnInit {
  cardmodel:any={}
  constructor(private activeroute:ActivatedRoute,
    private produck:ProductService,
    private card:CardService,
    private user:AuthorizationService) { }
    oneProduct:Producsts

  ngOnInit() {
    this.activeroute.params.subscribe(params=>{
    this.getOneProduct(params["productID"])
    this.getuserID()
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
  addcard(){
    var user = this.userID
    var pid 
    this.activeroute.params.subscribe(params=>{pid=params["productID"]})

    var cardm = new Cardmodel
    cardm.userID=user
    cardm.productID=pid
    this.card.postCard(cardm)
  }

  userID: string
  getuserID(){
    this.userID = this.user.getuserID()
  }

}
