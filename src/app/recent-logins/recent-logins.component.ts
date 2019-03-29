import { Component, OnInit, Input } from '@angular/core';
import { User } from './../model/login.model';
@Component({
  selector: 'app-recent-logins',
  templateUrl: './recent-logins.component.html',
  styleUrls: ['./recent-logins.component.scss']
})
export class RecentLoginsComponent {
  constructor() { }
  @Input() childRecentLogins: User[];

}
