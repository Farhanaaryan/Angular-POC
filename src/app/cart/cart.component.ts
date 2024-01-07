import { Component, OnInit,inject} from '@angular/core';
import { ActivatedRoute,Router,} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [
    {
        productId: "1",
        productImage: "/assets/images/Besan Laddoo.webp",
        productName: "Besan laddoo",
        productPrice: "320/kg",
        productDescription: "We get you  a spherical sweet from the Indian subcontinent ",
        productAvailable: true,
        productQuantity: 100,
        productStock: 100,
        productPriceNumeric: 320
    },
    // {
    //     productId: "2",
    //     productImage: "/assets/images/bhajani-chakli.jpg",
    //     productName: "Bhajani Chakli",
    //     productPrice: "180/Kg",
    //     productDescription: "A famous tea time snack. Enjoy with Tea",
    //     productAvailable: true,
    //     productQuantity: 10,
    //     productStock: 100,
    //     productPriceNumeric: 180

    // },
    // {
    //     productId: "3",
    //     productImage: "/assets/images/Carrot Pickle.jpg",
    //     productName: "Carrot Pickle",
    //     productPrice: "80/Kg",
    //     productDescription: "A delightful twist to elevate your taste buds!",
    //     productAvailable: false,
    //     productQuantity: 100,
    //     productStock: 0,
    //     productPriceNumeric: 80
    // },
    // {
    //     productId: "4",
    //     productImage: "./assets/images/Chilli Powder.webp",
    //     productName: "Chilli Powder",
    //     productPrice: "130/Kg",
    //     productDescription: "Spice up your life with Chilli Powder!.",
    //     productAvailable: true,
    //     productQuantity: 10,
    //     productStock: 100,
    //     productPriceNumeric: 130
    // },
    // {
    //     productId: "5",
    //     productImage: "/assets/images/Fruits.webp",
    //     productName: "Fruits",
    //     productPrice: "200/Kg",
    //     productDescription: "A rainbow of flavors in every bite! Healthy Fruits and diet",
    //     productAvailable: false,
    //     productQuantity: 100,
    //     productStock: 0,
    //     productPriceNumeric: 200
    // },
    // {
    //     productId: "6",
    //     productImage: "/assets/images/Garam Masala.webp",
    //     productName: "Garam Masala",
    //     productPrice: "124/Kg",
    //     productDescription: "Ignite your taste buds with allure of our Garam Masala ",
    //     productAvailable: false,
    //     productQuantity: 100,
    //     productStock: 0,
    //     productPriceNumeric: 124
    // },
    // {
    //     productId: "7",
    //     productImage: "/assets/images/handmade jewellery.jpg",
    //     productName: " Jewellery",
    //     productPrice: "200/piece",
    //     productDescription: "Handcrafted by love,Pearl and Jewellery",
    //     productAvailable: true,
    //     productQuantity: 100,
    //     productStock: 100,
    //     productPriceNumeric: 200
    // },
    // {
    //     productId: "8",
    //     productImage: "/assets/images/Mohanthal.webp",
    //     productName: "Mohanathal",
    //     productPrice: "250/Kg",
    //     productDescription: "every bite is a celebration of joy and flavor! ",
    //     productAvailable: true,
    //     productQuantity: 100,
    //     productStock: 100,
    //     productPriceNumeric: 250
    // },
    // {
    //     productId: "9",
    //     productImage: "/assets/images/Organic wheat.jpg",
    //     productName: "Organic Wheat",
    //     productPrice: "110/Kg",
    //     productDescription: "Let your meals be a celebration of health with our organic wheat ",
    //     productAvailable: true,
    //     productQuantity: 100,
    //     productStock: 100,
    //     productPriceNumeric: 110
    // },
    // {
    //     productId: "10",
    //     productImage: "/assets/images/Rice Oil.jpg",
    //     productName: "Rice Oil",
    //     productPrice: "140/litre",
    //     productDescription: "Liquid Gold: The Essence of Energy! Cook in healthy oil",
    //     productAvailable: true,
    //     productQuantity: 100,
    //     productStock: 100,
    //     productPriceNumeric: 140
    // },
    // {
    //     productId: "11",
    //     productImage: "/assets/images/Rice Papad.png",
    //     productName: "Rice Papad",
    //     productPrice: "30/packet",
    //     productDescription: "Savor the Crunch: Rice Papad Goodness in Every Bite",
    //     productAvailable: false,
    //     productQuantity: 100,
    //     productStock: 0,
    //     productPriceNumeric: 30
    // },
    // {
    //     productId: "12",
    //     productImage: "/assets/images/Vegetables.jpeg",
    //     productName: "Vegetables",
    //     productPrice: "150/Kg",
    //     productDescription: "From Garden to Plate: A Symphony of Fresh Vegetables.",
    //     productAvailable: true,
    //     productQuantity: 100,
    //     productStock: 100,
    //     productPriceNumeric: 150
    // }
]
  router: any;
  // activeRoute: ActivatedRoute = inject(ActivatedRoute);
  // router: Router = inject(Router);
//   products = [
//     {
//         productId: "1",
//         productImage: "/assets/Images/Besan Laddoo.webp",
//         productName: "Besan laddoo",
//         productPrice: "320/kg",
//         productDescription: "We get you  a spherical sweet from the Indian subcontinent ",
//         productAvailable: true,
//         productQuantity: 100,
//         productStock: 100,
//         productPriceNumeric: 320
//     }
// ]



  // ngOnInit(){
  //   this.course = history.state;
  // }
  constructor(
    private route: ActivatedRoute  ) {}


  ngOnInit(): void {
    
  }

}