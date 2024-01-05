import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  data: any
  selectedResource: string | null = null;

  constructor(private dataService: FetchDataService) { }

  //fetching data form the fetch-data service
  fetchData(resource: string) {
    this.selectedResource = resource;
    this.dataService.getData(resource).subscribe(
      (response: any) => {
        this.data = response;
        console.log(this.data);
      },
      (error: any) => {
        // Handle errors here
        console.error(error);
      },
      () => {
        // Handle completion here
        console.log("Request completed");
      }
    );
    
    }
  }
