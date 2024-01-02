import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  arr: number[] = [1,2,3,4,5,6,7,8,9,10,11,12] 

  loading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      // this.updateProductCounts();
    }, 1000);
  }

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
          productDescription: "Spice up your life with the fiery kick of our premium Chilli Powder!.",
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
          productDescription: "Ignite your taste buds with the aromatic allure of our Garam Masala ",
          productAvailable: false,
          productQuantity: 100,
          productStock: 0
      },
      {
          productId: "7",
          productImage: "/assets/images/handmade jewellery.jpg",
          productName: "Handmade Jewellery",
          productPrice: "200/piece",
          productDescription: "Handcrafted with love, worn with pride.",
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
  // noOfProducts = this.products.length
  // noOfProductsInStock = this.products.filter(p => p.productStock != 0).length
  // noOfProductsOutOfStock = this.products.filter(p => p.productStock == 0).length

 

  // isProductStocked: boolean = false

  // setProductStocked()

  filteredProducts = this.products;
  onSearchChange(searchTerm: string) {
    this.filteredProducts = this.products.filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  noOfProducts = this.filteredProducts.length
  noOfProductsInStock = this.filteredProducts.filter(p => p.productStock != 0).length
  noOfProductsOutOfStock = this.filteredProducts.filter(p => p.productStock == 0).length

  filterButton: string = 'all'

  onFilterChanged(event: string) {
      this.filterButton = event
  }

  // private updateProductCounts() {
  //     this.noOfProducts = this.filteredProducts.length;
  //     this.noOfProductsInStock = this.filteredProducts.filter(p => p.productStock !== 0).length;
  //     this.noOfProductsOutOfStock = this.filteredProducts.filter(p => p.productStock === 0).length;
  //   }
}

// export class ProductComponent implements OnInit {
//   name = "" ;
//   count:number = 0
//   product={
//     name: 'Iphone',
//     model: 15,
//     price: '120k',
//     stock: 3,
//     image: '/assets/images/Iphone.webp'
//   }

//   onNameChange(e : any){
//     this.name= e.target.value
//   }

//   removeFromCart(){
//     if(this.count > 0 ){
//       this.count --;
//     }
//   }

//   addToCart(){
//     if(this.count < this.product.stock){
//       this.count ++;
//     }
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

