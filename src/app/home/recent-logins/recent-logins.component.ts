import { Component, OnInit, Input } from '@angular/core';
import { User, RecentLogin } from './../../model/login.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-logins',
  templateUrl: './recent-logins.component.html',
  styleUrls: ['./recent-logins.component.scss']
})
export class RecentLoginsComponent implements OnInit{

  ngOnInit(){}
  constructor() {};

}
