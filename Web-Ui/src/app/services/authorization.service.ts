import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import { Registeruser } from '../models/registeruser';
import { Loginuser } from '../models/loginuser';

import { Usersmodel } from '../models/usermodel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

constructor(private http:HttpClient,
  private router:Router) { }
path="http://localhost:8081";
tokenkey ="ClientToken"
admintokenkey ="adminClientToken"
userkey = "NowUser"
adminkey="NoeAdmin"
userr:Usersmodel
adminuserr:Usersmodel

register(registeruser:Registeruser){
  let header=new HttpHeaders()
  header=header.append("Content-Type","application/json");
  registeruser.admin = false
  this.http.post(this.path+"/user/register",registeruser,{headers:header}).subscribe(data=>{
    
    
    this.router.navigateByUrl("/home")
   
  }); 

}

login(loginuser:Loginuser){
  let header=new HttpHeaders();
  header=header.append("Content-Type","application/json");
  this.http.post(this.path+"/user/login",loginuser,{headers:header}).subscribe(data=>{
    console.log(data+ "LOGİN");
    this.userr = data['user']
    this.userSaveID(this.userr)
    this.tokensave(data['token']);
    this.router.navigateByUrl("/home")
  }); 
}



adminlogin(loginuser:Loginuser){
  let header=new HttpHeaders();
  header=header.append("Content-Type","application/json");
  this.http.post(this.path+"/user/adminlogin",loginuser,{headers:header}).subscribe(data=>{
    //console.log(data.massage);
    this.adminuserr = data['user']
    this.adminSaveID(this.adminuserr)
    this.admintokensave(data['token']);
    this.router.navigateByUrl("/adminhome")
  }); 
}


//token
tokensave(token){
  localStorage.setItem(this.tokenkey,token);
}
admintokensave(token){
  localStorage.setItem(this.admintokenkey,token);
}
logout(){
  localStorage.removeItem(this.tokenkey);
  localStorage.removeItem(this.userkey);
  localStorage.removeItem(this.adminkey)
  localStorage.removeItem(this.admintokenkey)
  this.router.navigateByUrl("/home")
}

get isout(){
  return !!localStorage.getItem(this.tokenkey);
}

get token(){
  return localStorage.getItem(this.token);
}


//user

userSaveID(user:Usersmodel){
  localStorage.setItem(this.userkey,user._id)
}

adminSaveID(user:Usersmodel){
  localStorage.setItem(this.adminkey,user._id)
}

getuserID(){

  var userid = localStorage.getItem(this.userkey)
   if(userid != null){
      return userid
   }
   return null
}

getadminID(){

  var adminid = localStorage.getItem(this.adminkey)
   if(adminid != null){
      return adminid
   }
   return null
}



isUser(){
  return localStorage.getItem(this.userkey)
}
isAdmin(){
  return localStorage.getItem(this.adminkey)
}

}
