import { Component, Output, EventEmitter } from '@angular/core';
import { User } from './../model/login.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent {
  @Output() sendLogin = new EventEmitter();

  loginAccount: FirebaseListObservable<any[]>;

  constructor() { }

  login(username: string, password: string,){
    let loginUser = new User(null, username, password, null, null, null);
    console.log("login function reached");
    this.sendLogin.emit(loginUser);
  }

}
