import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Producsts } from "src/app/models/products";
import { AuthorizationService } from "src/app/services/authorization.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  products: Producsts[];
  search: any = {};
  constructor(
    private user: AuthorizationService,
    private produck: ProductService,
    private root:Router
  ) {}

  ngOnInit() {}
  logout() {
    this.user.logout();
  }

  get userout() {
    return this.user.isUser();
  }

  searchh() {
   var deger= this.search.name

    this.root.navigateByUrl('/search/'+deger)
  }

  getSearch(name: string) {
    console.log(name);
    this.produck.getSearch(name).subscribe(data => {
      this.products = data;
    });
  }
}
