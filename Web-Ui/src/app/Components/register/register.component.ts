import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authservice:AuthorizationService) { }
  registerUser:any={};

  ngOnInit() {
  }


  register(){
    
    this.authservice.register(this.registerUser);
  }
}
