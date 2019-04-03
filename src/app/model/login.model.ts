import { HttpClient, } from '@angular/common/http';

export class User {
  constructor(public image: string, public firstname: string,public lastname: string,public emailOrPhone: string, public password: string, public gender: string, public age: number,public username: string, public recentLogin: boolean) {}
}

export class Login {
  constructor(public username: string, public password: string){};
}
