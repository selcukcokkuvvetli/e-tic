import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { ActivatedRoute } from '@angular/router';
import { Producsts } from 'src/app/models/products';
import { Cardmodel } from 'src/app/models/cardmodel';
import { ProductService } from 'src/app/services/product.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Usersmodel } from 'src/app/models/usermodel';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private card:CardService,
    private activeroute:ActivatedRoute,
    private product:ProductService,
    private user:AuthorizationService) { }

  Usercard:Cardmodel []
 p: number =0
 total:number
 

  ngOnInit() {

    
    this.getuserID()
    this.getCard(this.userID)
  }


  getCard(userID:string){
    this.card.getCard(userID).subscribe(data=>{
      this.Usercard=data

      for (const item of this.Usercard) {
        this.total=item.Product.price;
      this.p =this.p + this.total
      
      }
      
      console.log(this.p)
    })
  }

  delCard(ID:string){
     this.card.delCard(ID).subscribe(data=>{
       this.getCard(this.userID);
     })
  }


totalcard(){

}




userID: string
getuserID(){
  this.userID = this.user.getuserID()
}

}
