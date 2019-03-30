import { Component, OnInit } from '@angular/core';
import { Firstpage } from 'src/app/models/firstpage';
import { ActivatedRoute } from '@angular/router';
import { FirstpageService } from 'src/app/services/firstpage.service';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from 'src/app/services/upload-file.service';


@Component({
  selector: 'app-adminSlider',
  templateUrl: './adminSlider.component.html',
  styleUrls: ['./adminSlider.component.css']
})
export class AdminSliderComponent implements OnInit {

  constructor(private main:FirstpageService,
  
    private activeRoute:ActivatedRoute,
    private product:ProductService,
    private http:HttpClient,
    private uploadService: UploadFileService) { }

    firstpage:any={}
  ngOnInit() {

  }
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };




  postSlider(){
    this.main.postSlider(this.firstpage)
  }


  upload() {
    this.progress.percentage = 0;
  
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

}
