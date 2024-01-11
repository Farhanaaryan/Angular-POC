import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  products = [
    {
        productId: "1",
        productImage: "/assets/images/Besan Laddoo.webp",
        productName: "Besan laddoo",
        productPrice: "320/kg",
        productDescription: "We get you  a spherical sweet from the Indian subcontinent ",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100
    },
    {
        productId: "2",
        productImage: "/assets/images/bhajani-chakli.jpg",
        productName: "Bhajani Chakli",
        productPrice: "180/Kg",
        productDescription: "A famous tea time snack. Enjoy with Tea",
        productAvailable: true,
        productQuantity: 10,
        productStock: 100
    },
    {
        productId: "3",
        productImage: "/assets/images/Carrot Pickle.jpg",
        productName: "Carrot Pickle",
        productPrice: "80/Kg",
        productDescription: "A delightful twist to elevate your taste buds!",
        productAvailable: false,
        productQuantity: 100,
        productStock: 0
    },
    {
        productId: "4",
        productImage: "./assets/images/Chilli Powder.webp",
        productName: "Chilli Powder",
        productPrice: "130/Kg",
        productDescription: "Spice up your life with Chilli Powder!.",
        productAvailable: true,
        productQuantity: 10,
        productStock: 100
    },
    {
        productId: "5",
        productImage: "/assets/images/Fruits.webp",
        productName: "Fruits",
        productPrice: "200/Kg",
        productDescription: "A rainbow of flavors in every bite! Healthy Fruits and diet",
        productAvailable: false,
        productQuantity: 100,
        productStock: 0
    },
    {
        productId: "6",
        productImage: "/assets/images/Garam Masala.webp",
        productName: "Garam Masala",
        productPrice: "124/Kg",
        productDescription: "Ignite your taste buds with allure of our Garam Masala ",
        productAvailable: false,
        productQuantity: 100,
        productStock: 0
    },
    {
        productId: "7",
        productImage: "/assets/images/handmade jewellery.jpg",
        productName: " Jewellery",
        productPrice: "200/piece",
        productDescription: "Handcrafted by love,Pearl and Jewellery",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100
    },
    {
        productId: "8",
        productImage: "/assets/images/Mohanthal.webp",
        productName: "Mohanathal",
        productPrice: "250/Kg",
        productDescription: "every bite is a celebration of joy and flavor! ",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100
    },
    {
        productId: "9",
        productImage: "/assets/images/Organic wheat.jpg",
        productName: "Organic Wheat",
        productPrice: "110/Kg",
        productDescription: "Let your meals be a celebration of health with our organic wheat ",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100
    },
    {
        productId: "10",
        productImage: "/assets/images/Rice Oil.jpg",
        productName: "Rice Oil",
        productPrice: "140/litre",
        productDescription: "Liquid Gold: The Essence of Energy! Cook in healthy oil",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100
    },
    {
        productId: "11",
        productImage: "/assets/images/Rice Papad.png",
        productName: "Rice Papad",
        productPrice: "30/packet",
        productDescription: "Savor the Crunch: Rice Papad Goodness in Every Bite",
        productAvailable: false,
        productQuantity: 100,
        productStock: 0
    },
    {
        productId: "12",
        productImage: "/assets/images/Vegetables.jpeg",
        productName: "Vegetables",
        productPrice: "150/Kg",
        productDescription: "From Garden to Plate: A Symphony of Fresh Vegetables.",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100
    }
]

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
  
  // Create data (POST)
  createData(data: any, resource: string): Observable<any> {
    const url = `${this.apiUrl}/${resource}`;
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
    );
  }

  // Update data (PUT)
  updateData(id: number, updatedData: any, resource: string): Observable<any> {
    const url = `${this.apiUrl}/${resource}/${id}`;
    return this.http.put(url, updatedData).pipe(
      catchError(this.handleError)
    );
  }

  // Delete data (DELETE)
  deleteData(id: number, resource: string): Observable<any> {
    const url = `${this.apiUrl}/${resource}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
  
  // //create data
  // createData(data: any): Observable<any> {
  //   return this.http.post(this.apiUrl, data);
  // }
  // //update data
  // updateData(id: number, updatedData: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  // }
  // //delete data
  // deleteData(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }

  sendData() {
    return this.products
  }
}