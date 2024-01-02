import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all: number = 0
  @Input()
  instock:number = 0
  @Input()
  outofstock: number = 0

  @Output()
  filterButtonChanged: EventEmitter<string> = new EventEmitter<string>()

  filterButton: string = 'all'

  onFilterButtonChanged(){
    this.filterButtonChanged.emit(this.filterButton)
  }

}
