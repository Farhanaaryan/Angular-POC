import { Component, OnInit,DoCheck, OnChanges, AfterContentInit, AfterContentChecked, OnDestroy,Input } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy  {
  @Input()    
  message:string | undefined

  constructor() { 
    console.log('hooks components constructor called')
  }

  ngOnChanges(){
    console.log('ngOnChnages hooks called')
    console.log(this.message)
  }

  ngOnInit(){
    console.log('ngOnInit called')
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called')
  }

}
