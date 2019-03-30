import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authservice:AuthorizationService) { }
  loginUser:any={}
  
  ngOnInit() {
  }


  login(){
   this.authservice.login(this.loginUser);
  }

}
