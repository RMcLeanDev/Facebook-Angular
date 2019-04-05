import { Component, OnInit } from '@angular/core';
import { User, Login } from './../model/login.model';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AppService } from './../app.service';
import { ActivatedRoute, Params} from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [AuthService, AppService]
})
export class FeedComponent implements OnInit {
  banner = false;
  info;
  image;
  profile;
  uid;

  constructor(private route: ActivatedRoute, public authService: AuthService, private router: Router, private appService: AppService, private database: AngularFireDatabase) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user == null){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['feed']);
        this.info = user.displayName;
        this.image = user.photoURL;
        this.uid = user.uid;
      }
    });
    this.profile = this.appService.getProfiles();
    console.log(this.profile);
  };

  logout(){
    this.authService.logout()
  }
  information(){
    const user = firebase.auth().currentUser;
    const email = user.email;
    console.log(email);
    const info = this.appService.getUserByEmail(email);
    console.log(info)
  }
}

if (this.user != null){
  this.user.providerData.forEach(function(profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  })
}
