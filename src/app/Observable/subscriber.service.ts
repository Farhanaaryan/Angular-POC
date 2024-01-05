import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  constructor() { }
  
  onSuscribeClicked(type: string){
    alert(type + " subscription done")
    // console.log(type)
  }
}
