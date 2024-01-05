import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Other properties and methods...

  OnLoginClicked() {
    alert("Better luck next time");
    // Handle the login logic here
    console.log('Login button clicked!');
  }
}