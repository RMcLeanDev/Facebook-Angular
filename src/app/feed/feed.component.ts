import { Component, OnInit } from '@angular/core';
import { User, Login } from './../model/login.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [AuthService]
})
export class FeedComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user == null){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['feed']);
      }
    });
  }
  logout(){
    this.authService.logout()
  }
}
