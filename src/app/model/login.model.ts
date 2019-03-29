import { HttpClient } from '@angular/common/http';

export class User {
  constructor(public ImageUrl: HttpClient, public username: string, public password: string) {}
}
