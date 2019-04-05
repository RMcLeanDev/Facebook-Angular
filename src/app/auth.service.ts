import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User, Login } from './model/login.model';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()

export class AuthService {
  user: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth) {
    this.user=afAuth.authState;
}
createAccount(create){
   const promise = new Promise((resolve, reject) => {
     this.afAuth.auth.createUserWithEmailAndPassword(create.email, create.password).catch(function(error) {
       let errorMessage = error.message;
       alert(errorMessage);
   }).then(update => {
     const user = firebase.auth().currentUser;
     user.updateProfile({
       displayName: create.firstname,
       photoURL: "https://firebasestorage.googleapis.com/v0/b/theclonedfacebook.appspot.com/o/dragon.png?alt=media&token=c0509963-14af-4f02-8bee-a94dcef40878",
     })
   });
 });
};

login(user: Login) {
 this.afAuth.auth.signInWithEmailAndPassword(user.username, user.password).catch(function(error) {
   let errorMessage = error.message;
   alert(errorMessage)
 });
};

logout(){
  this.afAuth.auth.signOut();
};

currentUserInfo(){
  const user = firebase.auth().currentUser;
  console.log(user);
}
}
