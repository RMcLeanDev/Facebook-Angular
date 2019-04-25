import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Upload } from '../../upload';
import { AppService } from '../../app.service';
import * as firebase from 'firebase';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-banner-image-update',
  templateUrl: './banner-image-update.component.html',
  styleUrls: ['./banner-image-update.component.scss']
})
export class BannerImageUpdateComponent implements OnInit {
  @Output() closeBannerUpdate = new EventEmitter;
  selectedFile: FileList;
  currentUpload: Upload;
  uid;
  bannerUpdate = true;
  constructor(private http: HttpClient, private upSvc: AppService, public authService: AuthService) { }
  ngOnInit() {
    firebase.storage().ref()
    this.authService.user.subscribe(user => {
      if (user != null){
        this.uid = user.uid;
      }
    });
  }
  onFileSelected(event){
    this.selectedFile = event.target.files;
    console.log(this.selectedFile);
  }

  onUpload(){
    let file = this.selectedFile.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushBannerUpload(this.currentUpload)
    this.bannerUpdate = false;
  }
  close(event){
    event = false
    this.closeBannerUpdate.emit(event);
  }
}
