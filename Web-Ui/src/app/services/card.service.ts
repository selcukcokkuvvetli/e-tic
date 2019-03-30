import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cardmodel } from '../models/cardmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

constructor(private http:HttpClient) { }
path = environment.path


getCard(userID:string):Observable<Cardmodel[]>{
  return this.http.get<Cardmodel[]>(this.path+'/card/card/'+userID)
}
delCard(ID:string){
  return this.http.delete(this.path+'/card/delcard/'+ID)
}

postCard(card:Cardmodel){
  let headers=new HttpHeaders()
    headers=headers.append("Content-Type", "application/json");
  this.http.post(this.path+'/card/postcard',card,{headers:headers}).subscribe(data=>{
    //yönlendirme yapılcak :*
  })
}
putCard(card:Cardmodel,cardID:string){
  let headers=new HttpHeaders()
  headers=headers.append("Content-Type", "application/json");
this.http.put(this.path+'/card/updatecard/'+cardID,card,{headers:headers}).subscribe(data=>{
  //yönlendirme yapılcak :*
})
}

}
