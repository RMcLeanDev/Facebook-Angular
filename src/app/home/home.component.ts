import { Component, OnInit } from '@angular/core';
import { User, RecentLogin } from '../model/login.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  masterRecentLogin: RecentLogin[] = [];
  constructor(private router: Router, private appService: AppService) {}
 creatingProfile = false;
  ngOnInit() {
    this.users = this.appService.getUsers();
  }

  seeDetailPage(clickedUser){
    this.router.navigate(['profile', clickedUser.$key]);
  };
  recentLogin(person){
    console.log(person);

  }
  loadingScreen(){
    this.creatingProfile = true;
    setTimeout(() => {
      this.creatingProfile = false;
    },7000)
  }
}
