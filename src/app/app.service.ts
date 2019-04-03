import { Injectable } from '@angular/core';
import { User } from './model/login.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AppService {
  profile: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.profile = database.list('users');
  }
  getUsers(){
    console.log("yeet");
    return this.profile;
  }
  addUser(addNewAccount: User){
    this.profile.push(addNewAccount);
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }
}
