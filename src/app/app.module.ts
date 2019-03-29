import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RecentLoginsComponent } from './recent-logins/recent-logins.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    RecentLoginsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
