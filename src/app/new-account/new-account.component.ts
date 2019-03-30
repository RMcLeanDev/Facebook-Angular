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

  profileImage: string = '';

  addNewAccount(name: string, newPassword: string, date: string, gender: string){
    const today = new Date();
    const birthday = new Date(date);
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    const finalAge = age;
    if (finalAge < 13){
      return alert("You must be over the age of 13 to create a account");
    }
    if (gender === 'female') {
      this.profileImage = 'assets/images/fbgirl160.jpeg';
    } else if (gender === 'male') {
      this.profileImage = 'assets/images/fbguy160.jpg';
    } else {
      return alert("Please Select a Gender");
    }
    let newUser: User = new User(this.profileImage, name, newPassword, gender, finalAge);
    console.log(newUser);
    this.sendUser.emit(newUser);
  }

}
