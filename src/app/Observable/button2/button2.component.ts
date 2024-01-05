import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../subscriber.service';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {

  constructor(private subSubscribe: SubscriberService ){}

  onSuscribe(){
    // let subsuscribe = new SuscriberService
    this.subSubscribe.onSuscribeClicked('Yearly')
  }


  ngOnInit(): void {
  }

}
