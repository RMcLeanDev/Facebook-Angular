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
    new User('assets/images/dragon.png', 'username', 'password', 'male'),
    new User('assets/images/lk.png', 'ryan', 'ryan', 'female'),
  ];
  addUser(newUser: User){
    this.masterRecentLogins.push(newUser);
  }
}
let app = new AppComponent;
console.log(app.masterRecentLogins[0].image)
