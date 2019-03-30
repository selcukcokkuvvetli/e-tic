import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producsts } from '../models/products';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
path=environment.path
constructor(private http:HttpClient,
  private router:Router) { }


postProduct(product:Producsts){
  let headers=new HttpHeaders()
  headers=headers.append("Content-Type", "application/json");
this.http.post(this.path+'/products/new',product,{headers:headers}).subscribe(data=>{
  this.router.navigateByUrl("/allproducts")
 
})

}
updateProduct(productID:string,product:Producsts){
  let headers=new HttpHeaders()
  headers=headers.append("Content-Type", "application/json");
this.http.put(this.path+'/products/update/'+productID,product,{headers:headers}).subscribe(data=>{
  this.router.navigateByUrl("/allproducts")
})
}
delProduct(productID:string){
  return this.http.delete(this.path+'/products/delete/'+productID)
}
getPCategory(category:string):Observable<Producsts[]>{
  return this.http.get<Producsts[]>(this.path+'/products/pCategory/'+category)
}
getMaxCategory(category:string):Observable<Producsts[]>{
  return this.http.get<Producsts[]>(this.path+'/products/maxCategory/'+category)
}
getMinCategory(category:string):Observable<Producsts[]>{
  return this.http.get<Producsts[]>(this.path+'/products/minCategory/'+category)
}
getProduct(productID:string):Observable<Producsts>{
  return this.http.get<Producsts>(this.path+'/products/getProduct/'+productID)
}
getSearch(name:string):Observable<Producsts[]>{
  return this.http.get<Producsts[]>(this.path+'/products/search/'+name)
}
gelAllProduct():Observable<Producsts[]>{
  return this.http.get<Producsts[]>(this.path+'/products/allProduct')
}
}

