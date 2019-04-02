import { HttpClient, } from '@angular/common/http';

export class User {
  constructor(public image: string, public username: string, public password: string, public gender: string, public age: number, public recentLogin: boolean) {}
}
