import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  // private apiUrl = 'https://dummyjson.com/products/';

  constructor(private http: HttpClient) { }

  // getData(resource: string): Observable<any> {
  //   const url = `${this.apiUrl}/${resource}`;
  //   return this.http.get<any>(url);
  // }

  // getData(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
  // return this.http.get<any>(this.apiUrl)
  //read data
  getData(resource: string): Observable<any> {
    const url = `${this.apiUrl}/${resource}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
  
  //create data
  createData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  //update data
  updateData(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }
  //delete data
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}