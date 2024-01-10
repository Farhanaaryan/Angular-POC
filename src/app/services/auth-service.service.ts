import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
import { DisplaynameService } from './displayname.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService { 
  name: string =''
  isLogged: Boolean = false;
  userService: UserService = inject(UserService);
//   displayName: DisplaynameService = inject(DisplaynameService)

  login(username: string, password: string) {
    // this.name =username
    let user = this.userService.users.find((u) => u.username === username
      && u.password === password);
    if (user === undefined)
      this.isLogged = false;
    else
      this.isLogged = true;
    return user;
  }

  logout() {
    this.isLogged = false;
    this.displayName.setUsername('')

  }

  IsAuthenticated() {
    return this.isLogged;
  }

  // ngOnInit(){
  //   this.returnUserName()
  // }

  // returnUserName(){
  //   if(this.isLogged){
  //     let names = this.userService.users.find((user) =>user.username ===this.name)
  //     let u= names.name;
  //     console.log(u);
  //   }
  // }

  constructor(public displayName:DisplaynameService) { }
}
