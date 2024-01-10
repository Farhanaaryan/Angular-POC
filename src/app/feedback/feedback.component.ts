import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  title="ReactiveForms";
  reactiveForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      name:new FormControl(null),
      email:new FormControl(null,[Validators.required,Validators.email]),
      feedback:new FormControl(null)

    });
  }
  onSubmit(event:any){
    
    console.log(this.reactiveForm);
  }

}
