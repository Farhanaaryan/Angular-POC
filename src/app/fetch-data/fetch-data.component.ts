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

  // Create data
  createData() {
    const newData = { /* your data here */ };
    this.dataService.createData(newData, 'your-resource').subscribe(
      response => {
        console.log('Created successfully:', response);
        // Refresh the data after creating
        this.fetchData('your-resource');
      },
      error => {
        console.error('Error creating data:', error);
      }
    );
  }

  // Update data
  updateData(id: number) {
    const updatedData = { /* your updated data here */ };
    this.dataService.updateData(id, updatedData, 'your-resource').subscribe(
      response => {
        console.log('Updated successfully:', response);
        // Refresh the data after updating
        this.fetchData('your-resource');
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  // Delete data
  deleteData(id: number) {
    this.dataService.deleteData(id, 'your-resource').subscribe(
      response => {
        console.log('Deleted successfully:', response);
        // Refresh the data after deleting
        this.fetchData('your-resource');
      },
      error => {
        console.error('Error deleting data:', error);
      }
    );
  }
}

