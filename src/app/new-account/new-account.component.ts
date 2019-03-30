import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../model/login.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent {
  @Input() childNewAccount: User[];
  @Output() sendUser = new EventEmitter();
  constructor() { }

  addNewAccount(name: string, newPassword: string){
    let newUser: User = new User(null, name, newPassword);
    console.log(newUser);
    this.sendUser.emit(newUser);
  }

}
