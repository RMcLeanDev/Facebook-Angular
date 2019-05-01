import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile.component';

@Component({
  selector: 'app-user-intro',
  templateUrl: './user-intro.component.html',
  styleUrls: ['./user-intro.component.scss']
})
export class UserIntroComponent implements OnInit {
  owner;
  constructor(private home: UserProfileComponent) { }

  ngOnInit() {
    setTimeout(() => {
      this.owner = this.home.admin
    },1000)
  }

}
