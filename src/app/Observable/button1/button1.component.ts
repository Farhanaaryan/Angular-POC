import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../subscriber.service';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {

  // instance of subscriber service is create using construtor
  constructor(private subSubscribe: SubscriberService ){}

  onSuscribe(){
    // let subsuscribe = new SuscriberService
    this.subSubscribe.onSuscribeClicked('Monthly') //string monthly is pass as argument to show when btton is clicked
  }


  ngOnInit(): void {
  }

}
