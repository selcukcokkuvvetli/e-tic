import { Component, OnInit } from "@angular/core";
import { FirstpageService } from "src/app/services/firstpage.service";
import { ActivatedRoute } from "@angular/router";
import { Firstpage } from "src/app/models/firstpage";

@Component({
  selector: "app-updateSlider",
  templateUrl: "./updateSlider.component.html",
  styleUrls: ["./updateSlider.component.css"]
})
export class UpdateSliderComponent implements OnInit {
  constructor(
    private main: FirstpageService,
    private activeRoute: ActivatedRoute
  ) {}
  firstpage: any = {};

  param;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.param = params["sliderID"]),
       this.getONeslider(params["sliderID"]);
    });
  }

  updateSlider() {
    this.main.updateSlider(this.param, this.firstpage);
  }

  getONeslider(sliderID: string) {
    this.main.getOnerslider(sliderID).subscribe(data => {
      this.firstpage = data;
    });
  }
}
