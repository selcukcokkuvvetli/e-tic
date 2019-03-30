import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Producsts } from '../models/products';
import { Firstpage } from '../models/firstpage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirstpageService {

constructor(private http:HttpClient,
  private router:Router) { }
path = environment.path



topItem():Observable<Producsts[]>{
  return this.http.get<Producsts[]>(this.path+'/main/topItem')

}
getSlider():Observable<Firstpage[]>{
  return this.http.get<Firstpage[]>(this.path+'/main/getSliders')
}
delSlider(id:string){
  return this.http.delete(this.path+'/main/delSlider/'+id)
}
postSlider(slider:Firstpage){
  let headers=new HttpHeaders()
    headers=headers.append("Content-Type", "application/json");
  this.http.post(this.path+'/main/slider',slider,{headers:headers}).subscribe(data=>{
    this.router.navigateByUrl("/allsliders")
  })
}
gelAllSlider():Observable<Firstpage[]>{
  return this.http.get<Firstpage[]>(this.path+'/main/allSlider')
}
getOnerslider(id:string){
  return this.http.get<Firstpage>(this.path+'/main/OneSlider/'+id)
}
updateSlider(sliderID:string,firstmodel:Firstpage){
  let headers=new HttpHeaders()
    headers=headers.append("Content-Type", "application/json");
  this.http.put(this.path+'/main/update/'+sliderID,firstmodel,{headers:headers}).subscribe(data=>{
    this.router.navigateByUrl("/allsliders")
  })
}
}
