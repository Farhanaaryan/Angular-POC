import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchChange = new EventEmitter<string>();
  
  searchTerm: string = '';

  onSearchClick() {
    this.searchChange.emit(this.searchTerm);
  }

  searchTxt: string = ''

  updateSearch(inputEl : HTMLInputElement){
    this.searchTxt = inputEl.value
  }

}
