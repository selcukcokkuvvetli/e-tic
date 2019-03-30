import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-adminFooter',
  templateUrl: './adminFooter.component.html',
  styleUrls: ['./adminFooter.component.css']
})
export class AdminFooterComponent implements OnInit {

  constructor(private user:AuthorizationService) { }

  ngOnInit() {
  }


  adminID: string
  getadminID(){
    this.adminID=this.user.getadminID()
  }
get adminout(){
  return this.user.isAdmin()
}



}
