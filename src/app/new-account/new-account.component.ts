import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../model/login.model';
import { FormControl, FormGroup, FormsModule } from '@angular/forms'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent {
  @Input() childNewAccount: User[];
  @Output() sendUser = new EventEmitter();
  constructor() { }
  submitResult(result){
    console.log(result);
  }
  addNewAccount(name: string, newPassword: string, gender: string){
    if (gender === 'female') {
      let profileImage = 'assets/images/fbgirl160.jpeg';
    } else if (gender === 'male') {
      let profileImage = 'assets/images/fbguy160.jpg';
    } else {
      return alert("Please Select a Gender");
    }
    let newUser: User = new User(profileImage, name, newPassword, gender);
    console.log(newUser);
    this.sendUser.emit(newUser);
  }

}
