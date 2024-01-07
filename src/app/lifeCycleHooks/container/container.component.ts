import { Component, AfterViewChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterViewChecked, AfterViewInit {

  inputVal: string = ''
  isDestroy: boolean = false

  constructor() {
    console.log('container component constructor called')
   }

   onBtnClick(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value
   }

   ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  destroyComponent(){
    this.isDestroy = !(this.isDestroy)
  }

}
