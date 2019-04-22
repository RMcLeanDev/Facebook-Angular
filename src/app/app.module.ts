import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './home/login-header/login-header.component';
import { RecentLoginsComponent } from './home/recent-logins/recent-logins.component';
import { NewAccountComponent } from './home/new-account/new-account.component';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FeedComponent } from './feed/feed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HeaderComponent } from './header/header.component';
import { OnlineFriendsComponent } from './online-friends/online-friends.component';
import { NewprofileimageComponent } from './user-profile/newprofileimage/newprofileimage.component';
import { UserProfileTopComponent } from './user-profile/user-profile-top/user-profile-top.component';
import { UserImagesComponent } from './user-profile/user-images/user-images.component';
import { UserIntroComponent } from './user-profile/user-intro/user-intro.component';
import { UserPostsComponent } from './user-profile/user-posts/user-posts.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    RecentLoginsComponent,
    NewAccountComponent,
    HomeComponent,
    FeedComponent,
    UserProfileComponent,
    HeaderComponent,
    OnlineFriendsComponent,
    NewprofileimageComponent,
    UserProfileTopComponent,
    UserImagesComponent,
    UserIntroComponent,
    UserPostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
