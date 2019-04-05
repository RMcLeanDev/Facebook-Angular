import { Component, OnInit } from '@angular/core';
import { User, Login } from './../model/login.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [AuthService]
})
export class FeedComponent implements OnInit {

  info;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user == null){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['feed']);
      }
    });
    this.info = this.authService.getUser();
  }
  logout(){
    this.authService.logout()
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
