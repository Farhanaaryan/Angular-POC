import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asynchrounous-observables',
  templateUrl: './asynchrounous-observables.component.html',
  styleUrls: ['./asynchrounous-observables.component.css']
})
export class AsynchrounousObservablesComponent implements OnInit {
  title ='AngularObservables';

  // myObservable=new Observable((observer)=>{
  //   console.log("observer starts")
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   setTimeout(()=>{observer.next("3")},3000)
  //   // setTimeout(()=>{observer.error(new Error('Something went wrong!Please try later'))},3000)
  //   setTimeout(()=>{observer.next("4")},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   setTimeout(()=>{observer.complete()},6000)

  // })

  myObservable=Observable.create((observer)=>{
        console.log("observer starts")
    setTimeout(()=>{observer.next("1")},1000)
    setTimeout(()=>{observer.next("2")},2000)
    setTimeout(()=>{observer.next("3")},3000)
    // setTimeout(()=>{observer.error(new Error('Something went wrong!Please try later'))},3000)
    setTimeout(()=>{observer.next("4")},4000)
    setTimeout(()=>{observer.next("5")},5000)
    setTimeout(()=>{observer.complete()},6000)
    

  })

  array1=[1,2,3,4,5]
  

  constructor() { }

  ngOnInit(): void {
    this.myObservable.subscribe((val)=>{
      console.log(val)

    },(error)=>{
      alert(error.message);

    },()=>{
      alert("Observable has completed emitting all values")
    });
  }

}
