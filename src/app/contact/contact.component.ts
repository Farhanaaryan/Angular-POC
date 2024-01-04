import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  country: string = 'india';
  message: string = '';

  isSubmitted: boolean = false;

  OnSubmit(){
    this.isSubmitted = true;
 
      this.firstName = '';
      this.lastName = '';
      this.country = '';
      this.message = '';
    }
  

 
  canExit(){
    // console.log('canExit called!')
    if((this.firstName || this.lastName || this.message) && !this.isSubmitted){
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }
    else{
      return true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

