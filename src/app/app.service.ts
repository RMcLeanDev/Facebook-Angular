import { Injectable } from '@angular/core';
import { User } from './model/login.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Upload } from './upload';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AppService {
  profile: FirebaseListObservable<any[]>;
  current = firebase.auth().currentUser;
  user: Observable<firebase.User>;
  uid;

  constructor(private database: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.profile = database.list('users');
    this.user=afAuth.authState;
  }
  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    this.user.subscribe(user => {
      if (user == null){
      } else {
        this.uid = user.uid;
      }
    });
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        console.log(error)
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
        firebase.database().ref().child(`users/${this.uid}/profileImg`).set(upload.url);
        firebase.database().ref().child(`users/${this.uid}/images`).push(`${upload.url}`)
      }
    );
  }
  private saveFileData(upload: Upload) {
    this.database.list(`${this.basePath}/`).push(upload);
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
