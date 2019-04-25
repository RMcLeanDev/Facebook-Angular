export class User {
  constructor(public profileImg: string, public firstname: string,public lastname: string,public email: string, public password: string, public gender: string, public age: number,public images: object, public bannerImg: string, public banners: object) {}
}

export class Login {
  constructor(public username: string, public password: string){};
}
export class RecentLogin {
  constructor(public username: string, public image: string){}
}
