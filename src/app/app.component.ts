import { Component, Pipe } from '@angular/core';
import { User } from './model/login.model';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: "default"
})
class DefaultPipe {
  transform(value: string) {
    let image = '';
    if (value){
      image = value;
    } else {}
    return image
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  disclaimer = true;
  hideDisclaimer(){
    this.disclaimer=false;
  }
}
