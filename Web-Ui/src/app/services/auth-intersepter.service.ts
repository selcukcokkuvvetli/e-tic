import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthIntersepterService implements HttpInterceptor{

constructor(private injector:Injector) { }
intercept(req,next){
var authservice=this.injector.get(AuthorizationService)
if(authservice.isout){
var autreq=req.clone({
  headers:req.headers.set("authorization","token "+authservice.token)
});
return next.handle(autreq);
}
else{
  return next.handle(req);
}
}


}
