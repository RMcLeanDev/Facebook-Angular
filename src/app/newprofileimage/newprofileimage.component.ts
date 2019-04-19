import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-newprofileimage',
  templateUrl: './newprofileimage.component.html',
  styleUrls: ['./newprofileimage.component.scss']
})
export class NewprofileimageComponent implements OnInit {
  selectedFile = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){
    
  }
}
