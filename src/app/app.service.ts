import { Injectable } from '@angular/core';
import { User } from './model/login.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AppService {
  profile: FirebaseListObservable<any[]>;
  current = firebase.auth().currentUser;

  constructor(private database: AngularFireDatabase) {
    this.profile = database.list('users');
  }
  getUsers(){
    return this.profile;
  }
  addUser(addNewAccount){
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    console.log(userId);
    let root = firebase.database().ref();
    root.child('users').child(userId).set(addNewAccount);
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }
}
