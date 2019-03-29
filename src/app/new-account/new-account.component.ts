import { Component, OnInit, Input } from '@angular/core';
import { User } from './../model/login.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  @Input() childNewAccount: User[];
  constructor() { }

  ngOnInit() {
  }

}
