import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../model/login.model';
import { AppService } from '../../app.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-top',
  templateUrl: './user-profile-top.component.html',
  styleUrls: ['./user-profile-top.component.scss']
})
export class UserProfileTopComponent implements OnInit {
  @Output() openNewImage = new EventEmitter();
  userId: string;
  userDisplay;
  images;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private appService: AppService) { }

  ngOnInit() {
    this.route.params.forEach((urlParamaters) => {
      this.userId = urlParamaters['id'];
    });
    this.userDisplay = this.appService.getUserById(this.userId);
    this.images = this.appService.getUserImages(this.userId);
  }
  open(event){
    event = true;
    this.openNewImage.emit(event);
  }
}
