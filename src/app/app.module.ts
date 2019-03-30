import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RecentLoginsComponent } from './recent-logins/recent-logins.component';
import { NewAccountComponent } from './new-account/new-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    RecentLoginsComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
