import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { AppService } from '../../app.service';
import { ImageViewComponent } from '../image-view/image-view.component';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {
  @Output() selectedImage = new EventEmitter();
  userId;
  images = [];
  addImage = false;

  constructor(private route: ActivatedRoute, private appService: AppService, private database: AngularFireDatabase,) { }

  ngOnInit() {
    this.route.params.forEach((urlParamaters) => {
      this.userId = urlParamaters['id'];
    });
    let arr1 = [];
    firebase.database().ref().child(`users/${this.userId}/images`).limitToLast(9).on('child_added', items => arr1.push(items.val()));
    this.images = arr1;
  }
  detail(img){
    this.selectedImage.emit(img);
  }
  open(){
    this.addImage = true;
  }
  closeNewImage(event){
    this.addImage = event;
  }
}
