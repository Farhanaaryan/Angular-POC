import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HTTPComponent implements OnInit {
  title='AngularHTTPrequest';




  constructor(private http:HttpClient) { }



  onProductCreate(products: {Pname:string,desc:string,price:string}){
    console.log(products);
    this.http.post('https://angular-poc-18e10-default-rtdb.firebaseio.com/products.json', products)
    .subscribe((res)=>{
      console.log(res);
    })
  }
  private fetchProducts(){
    this.http.get('https://angular-poc-18e10-default-rtdb.firebaseio.com/products.json').subscribe((res)=>{
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductFetch(){
    this.fetchProducts();
  }

}
