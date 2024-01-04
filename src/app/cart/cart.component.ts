import { Component, OnInit,inject} from '@angular/core';
import { ActivatedRoute,Router,} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  products = [
    {
        productId: "1",
        productImage: "/assets/Images/Besan Laddoo.webp",
        productName: "Besan laddoo",
        productPrice: "320/kg",
        productDescription: "We get you  a spherical sweet from the Indian subcontinent ",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100,
        productPriceNumeric: 320
    }
]

  // ngOnInit(){
  //   this.course = history.state;
  // }

  ngOnInit(): void {
    
  }

  constructor() { }

}
