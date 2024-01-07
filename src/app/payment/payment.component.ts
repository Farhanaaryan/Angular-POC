import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onBuyNowClick(): void {
    // Show an alert message when Buy Now button is clicked
    alert('Thank you for your purchase!');
  }
}






