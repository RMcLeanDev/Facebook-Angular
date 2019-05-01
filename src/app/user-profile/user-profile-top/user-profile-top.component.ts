import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../model/login.model';
import { AppService } from '../../app.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../user-profile.component';

@Component({
  selector: 'app-user-profile-top',
  templateUrl: './user-profile-top.component.html',
  styleUrls: ['./user-profile-top.component.scss']
})
export class UserProfileTopComponent implements OnInit {
  @Output() openNewImage = new EventEmitter();
  @Output() openBannerUpdate = new EventEmitter();
  userId: string;
  userDisplay;
  images;
  owner;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private appService: AppService, private home: UserProfileComponent) { }

  ngOnInit() {
    this.route.params.forEach((urlParamaters) => {
      this.userId = urlParamaters['id'];
    });
    this.userDisplay = this.appService.getUserById(this.userId);
    this.images = this.appService.getUserImages(this.userId);
    setTimeout(() => {
      this.owner = this.home.admin;
    },1000)
  }
  open(event){
    event = true;
    this.openNewImage.emit(event);
  }
  updateBanner(event){
    event = true
    this.openBannerUpdate.emit(event)
  }
}
