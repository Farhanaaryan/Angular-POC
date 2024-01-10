import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { DisplaynameService } from '../services/displayname.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('username')
  username!: ElementRef;
  @ViewChild('password')
  password!: ElementRef;

  authService: AuthServiceService;
  router:Router;
  activeRoute: ActivatedRoute;
  displayname: DisplaynameService;

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));
      if(logout){
        this.authService.logout();
        alert('You are now logged out. IsLogged = ' + this.authService.isLogged);
      }
    })
  }

  OnLoginClicked(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if(user === undefined){
      alert('The login credentials you have entered is not correct.')
    }
    else{
      alert('Welcome ' + user.name + '. You are logged in.');
      this.router.navigate(['\home']);
    }
    this.displayname.setUsername(user?.name || '');

  }

  constructor(
    authService: AuthServiceService,
    router: Router,
    activeRoute: ActivatedRoute,
    displayname: DisplaynameService
  ) {
    this.authService = authService;
    this.router = router;
    this.activeRoute = activeRoute;
    this.displayname = displayname;
  }

}
