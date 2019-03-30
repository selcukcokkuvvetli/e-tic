import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private user:AuthorizationService) { }
  loginUser:any={}

  ngOnInit() {
  }
  
  login(){
    this.user.adminlogin(this.loginUser)
  }
}
