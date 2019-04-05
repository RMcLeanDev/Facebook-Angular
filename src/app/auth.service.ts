import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './model/login.model';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()

export class AuthService {

  constructor() { }

}
