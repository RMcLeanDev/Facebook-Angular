import { Injectable } from '@angular/core';
import { User } from './model/login.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AppService {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }
  getUsers(){
    console.log("yeet");
    return this.users;
  }
  addUser(addNewAccount: User){
    this.users.push(addNewAccount);
  }
}
