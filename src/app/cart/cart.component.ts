import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  foodItems: any[] = [
    {
      "title": "Pizza",
      "description": "Delicious pizza with a variety of toppings.",
      "price": "₹450",
      "rating": 4.5,
      "location": "Bangalore"
    },
    {
      "title": "Burger",
      "description": "Classic burger with juicy patty and fresh veggies.",
      "price": "₹200",
      "rating": 4.2,
      "location": "Mumbai"
    },
    {
      "title": "Pasta",
      "description": "Creamy pasta with your choice of sauce.",
      "price": "₹350",
      "rating": 4.0,
      "location": "Delhi"
    },
    {
      "title": "Sushi",
      "description": "Authentic Japanese sushi rolls made with fresh ingredients.",
      "price": "₹600",
      "rating": 4.8,
      "location": "Tokyo"
    },
    {
      "title": "Tacos",
      "description": "Flavorful tacos with your favorite fillings.",
      "price": "₹180",
      "rating": 4.1,
      "location": "Mexico City"
    },
    {
      "title": "Chicken Curry",
      "description": "Spicy and aromatic chicken curry.",
      "price": "₹300",
      "rating": 4.6,
      "location": "Kolkata"
    },
    {
      "title": "Salad",
      "description": "Fresh and healthy salad with a variety of greens.",
      "price": "₹120",
      "rating": 3.9,
      "location": "Los Angeles"
    },
    {
      "title": "Ice Cream",
      "description": "Creamy and delicious ice cream in various flavors.",
      "price": "₹80",
      "rating": 4.3,
      "location": "Paris"
    }
  ];
  


  constructor() { }

  ngOnInit(): void {
  }

}
