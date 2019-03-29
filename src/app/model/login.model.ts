import { HttpClient } from '@angular/common/http';

export class User {
  constructor(public image, public username: string, public password: string) {}
}
