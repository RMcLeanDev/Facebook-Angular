import { Component } from '@angular/core';
import { User } from './model/login.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  masterRecentLogins: User[] = [
    new User(new URL("../dragon.png"), 'username', 'password'),
    new User(null, 'ryan', 'ryan'),
  ];

}
