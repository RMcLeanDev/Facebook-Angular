import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service';
import * as firebase from 'firebase';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
  providers: [AppService, AuthService]
})
export class ImageViewComponent implements OnInit {
  @Input() masterSelectedImage;
  @Output() closeImage = new EventEmitter;
  constructor(private appService: AppService, private authService: AuthService, private route: ActivatedRoute) {}
  imageViewer = false;
  userId;
  user;
  activeUserId;
  activeUser;
  ngOnInit() {
    this.route.params.forEach((urlParamaters) => {
      this.userId = urlParamaters['id'];
    });
    this.user = this.appService.getUserById(this.userId)
    let activeUserId = firebase.auth().currentUser;
    this.activeUserId = firebase.auth().currentUser.uid;
    this.activeUser = this.appService.getUserById(this.activeUserId);
  }

  viewImage(){
    this.imageViewer = true;
  }
  closeImageView(event){
    event = false
    this.closeImage.emit(event)
  }

  updateProfileImage(){
    this.appService.updateProfileImage(this.masterSelectedImage.url)
    this.closeImage.emit(false);
  }
  deleteImage(image){
    console.log(image.$key);
    this.appService.delete(image.$key);
  }
}
