import { Component, OnInit } from '@angular/core';
import { User } from '../model/login.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }
  users: FirebaseListObservable<any[]>;
}
