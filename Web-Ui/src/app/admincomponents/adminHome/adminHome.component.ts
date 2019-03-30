import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-adminHome',
  templateUrl: './adminHome.component.html',
  styleUrls: ['./adminHome.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private user:AuthorizationService) { }

  ngOnInit() {
  }

  adminID: string;
  getadminID() {
    this.adminID = this.user.getadminID();
  }
  get adminout() {
    return this.user.isAdmin();
  }
}
