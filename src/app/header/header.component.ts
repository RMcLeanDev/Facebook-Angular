import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User, Login, RecentLogin } from './../model/login.model';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AppService } from './../app.service';
import { ActivatedRoute, Params} from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService, AppService]
})
export class HeaderComponent implements OnInit {
  profile;
  uid;
  constructor(private route: ActivatedRoute, public authService: AuthService, private router: Router, private appService: AppService, private database: AngularFireDatabase) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user == null){
        this.router.navigate(['']);
      } else {
        this.uid = user.uid;
        this.profile = this.appService.getUserById(this.uid);
      }
    });
  }

  logout(){
    this.authService.logout()
  }

  toProfile(){
    this.router.navigate(['profile', this.uid])
  }
}
