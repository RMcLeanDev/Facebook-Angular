import { Component, Output, EventEmitter } from '@angular/core';
import { User, Login, RecentLogin } from './../../model/login.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss'],
  providers: [AuthService]
})
export class LoginHeaderComponent {
  @Output() childRecentLogin = new EventEmitter();

  constructor(public authService: AuthService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['feed']);
      }
    });
  }

  login(username, password,){
    let loginUser = new Login(username, password);
    this.authService.login(loginUser);
  }
}
