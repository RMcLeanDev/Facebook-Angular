import { Component, OnInit } from '@angular/core';
import { User } from '../model/login.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.masterAccounts);
  }

  masterAccounts: User[] = [
    new User(0, 'assets/images/dragon.png', 'username', 'password', 'male', 23, true),
    new User(1, 'assets/images/lk.png', 'ryan', 'ryan', 'female', 18, false),
  ];
  addUser(newUser: User){
    this.masterAccounts.push(newUser);
  }
  recentLogins: User[] = [];

  login(loginUser: User){
    console.log("app component login function reached");
    for (let i = 0; i < this.masterAccounts.length; i++){
      if (loginUser.username === this.masterAccounts[i].username && loginUser.password === this.masterAccounts[i].password){
        this.masterAccounts[i].recentLogin = true;
        this.recentLogins.push(this.masterAccounts[i]);
        console.log(this.recentLogins);
        return alert("You have logged in!")
      } else {console.log("not able to log in")}
    }
  }
}
