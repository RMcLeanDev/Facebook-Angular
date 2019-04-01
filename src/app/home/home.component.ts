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
  }

  masterRecentLogins: User[] = [
    new User('assets/images/dragon.png', 'username', 'password', 'male', 23),
    new User('assets/images/lk.png', 'ryan', 'ryan', 'female', 18),
  ];
  addUser(newUser: User){
    this.masterRecentLogins.push(newUser);
  }
  login(loginUser: User){
    console.log("app component login function reached");
    for (let i = 0; i < this.masterRecentLogins.length; i++){
      if (loginUser.username === this.masterRecentLogins[i].username && loginUser.password === this.masterRecentLogins[i].password){
        return alert("You have logged in!")
      } else {console.log("not able to log in")}
    }
  }

}
