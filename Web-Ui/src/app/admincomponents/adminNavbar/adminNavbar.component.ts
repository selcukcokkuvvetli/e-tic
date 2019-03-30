import { Component, OnInit } from "@angular/core";
import { AuthorizationService } from "src/app/services/authorization.service";

@Component({
  selector: "app-adminNavbar",
  templateUrl: "./adminNavbar.component.html",
  styleUrls: ["./adminNavbar.component.css"]
})
export class AdminNavbarComponent implements OnInit {
  constructor(private user: AuthorizationService) {}

  logout() {
    this.user.logout();
  }
 

  adminID: string;
  getadminID() {
    this.adminID = this.user.getadminID();
  }
  get adminout() {
    return this.user.isAdmin();
  }

  ngOnInit() {}
}
