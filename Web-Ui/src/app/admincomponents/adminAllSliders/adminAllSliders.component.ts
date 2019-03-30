import { Component, OnInit } from '@angular/core';
import { Firstpage } from 'src/app/models/firstpage';
import { FirstpageService } from 'src/app/services/firstpage.service';

@Component({
  selector: 'app-adminAllSliders',
  templateUrl: './adminAllSliders.component.html',
  styleUrls: ['./adminAllSliders.component.css']
})
export class AdminAllSlidersComponent implements OnInit {

  constructor(private slider:FirstpageService) { }
  firstpages:Firstpage[]
  ngOnInit() {
    this.getAllSlider();
  }
  getAllSlider(){
    this.slider.gelAllSlider().subscribe(data=>{
      this.firstpages=data
    })
  }
  deleteSlider(sliderID:string){
    this.slider.delSlider(sliderID).subscribe(data=>{
      this.getAllSlider()
    })
  }
}
