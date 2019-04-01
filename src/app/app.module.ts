import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RecentLoginsComponent } from './recent-logins/recent-logins.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    RecentLoginsComponent,
    NewAccountComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
