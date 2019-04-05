import { Injectable } from '@angular/core';
import { User } from './model/login.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AppService {
  profile: FirebaseListObservable<any[]>;
  firebaseItems = firebase.database().ref('users/');

  constructor(private database: AngularFireDatabase) {
    this.profile = database.list('users');
  }
  getUsers(){
    return this.profile;
  }
  addUser(addNewAccount: User){
    let root = firebase.database().ref();
    root.child('yup').set({
      name: "stuff",
      information: addNewAccount
    })
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }
  getUserByEmail(email: string){
    return this.database.object('users/' + email);
  }
  getProfiles(){
    return this.firebaseItems
  }
}
