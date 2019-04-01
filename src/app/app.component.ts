import { Component, Pipe } from '@angular/core';
import { User } from './model/login.model';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: "default"
})
class DefaultPipe {
  transform(value: string) {
    let image = '';
    if (value){
      image = value;
    } else {}
    return image
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
let app = new AppComponent;
console.log(app.masterRecentLogins[0].image)
