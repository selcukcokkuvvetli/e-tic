import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UploadFileService } from 'src/app/services/upload-file.service';

const  URL= environment.path+'/api/upload'

@Component({
  selector: 'app-adminProduct',
  templateUrl: './adminProduct.component.html',
  styleUrls: ['./adminProduct.component.css']
})
export class AdminProductComponent implements OnInit {

  
  constructor(private product:ProductService,
    private activeRoute:ActivatedRoute,
    private http:HttpClient,private uploadService: UploadFileService) { }
  products:any={}

  ngOnInit() {
 
  }
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  postProduct(){
    this.product.postProduct(this.products)
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


  options = [
    { name: "GPU", value: "GPU" },
    { name: "Desktop", value: "Desktop" },
    { name: "CPU", value: "CPU" },
    { name: "Laptop", value: "laptop" },
    { name: "Modem", value: "Modem" },
    { name: "Motherboard", value: "Motherboard" },
    { name: "Mouse Keyboard", value: "Mouse Keyboard" },
    { name: "USB", value: "USB" },
   
  ]



}
