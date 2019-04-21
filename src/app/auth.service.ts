import { Injectable, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User, Login, RecentLogin } from './model/login.model';
import { AppService } from './app.service';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class AuthService {
  @Output() recentLogins = new EventEmitter();

  user: Observable<firebase.User>;
  current = firebase.auth().currentUser;
  recentLogin;

  constructor(public afAuth: AngularFireAuth) {
    this.user=afAuth.authState;
}

getUser(){
  return this.current
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
  const user = firebase.auth().currentUser;
  this.recentLogin = user.uid
  this.recentLogin = new RecentLogin('username', 'password');
  this.recentLogins.emit(this.recentLogin);
  this.afAuth.auth.signOut();
};
currentUserInfo(){
  const user = firebase.auth().currentUser;
  console.log(user);
}
userinfo(){
  const user = firebase.auth().currentUser.email;
  return user;
  };
}
