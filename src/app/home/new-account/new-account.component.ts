import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../model/login.model';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AppService } from './../../app.service';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [AppService, AuthService]
})
export class NewAccountComponent {
  @Input() childNewAccount: User[];

  constructor(private appService: AppService, public authService: AuthService) { }
  submitResult(result){
    console.log(result);
  }

  profileImage: string = '';
  profileId;

  addNewAccount(firstName: string, lastName:string, phoneOrEmail:string, newPassword: string, date: string, gender: string){
    const today = new Date();
    let birthday = new Date(date);
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    const finalAge = age;
    if (isNaN(finalAge)) {
      return alert("Please put in your birthday so we know you are old enough");
    }
    if (finalAge < 13){
      return alert("You must be over the age of 13 to create a account");
    }
    if (gender === 'female') {
      this.profileImage = 'assets/images/fbgirl160.jpeg';
    } else {
      this.profileImage = 'assets/images/fbguy160.jpg';
    }
    if (gender === undefined) {
      gender = "None Given";
    }
    let newUser: User = new User(this.profileImage, firstName, lastName, phoneOrEmail, newPassword, gender, finalAge, '', false);
    console.log(newUser);
    this.authService.createAccount(newUser);
    this.appService.addUser(newUser);
    alert("Thank you for making a account you can now log in");
  }

}
