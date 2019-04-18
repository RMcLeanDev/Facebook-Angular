import { Component, Pipe, Input, OnInit } from '@angular/core';
import { User, RecentLogin } from './model/login.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})

export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user == null){
      } else {
        this.disclaimer = false;
      }
    });
  };
  disclaimer = true;
  hideDisclaimer(){
    this.disclaimer=false;
  }
}
