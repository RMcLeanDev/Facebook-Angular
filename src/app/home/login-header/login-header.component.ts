import { Component, Output, EventEmitter } from '@angular/core';
import { User, Login } from './../../model/login.model';
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
  @Output() sendLogin = new EventEmitter();

  constructor(public authService: AuthService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['profile']);
      }
    });
  }

  login(username, password,){
    let loginUser = new Login(username, password);
    console.log("login function reached");
    this.authService.login(loginUser);
  }

}
