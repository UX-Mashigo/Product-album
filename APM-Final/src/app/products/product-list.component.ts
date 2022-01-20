import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  listFilter: string= 'cart';
  products: any[] = [

  {
    "productId": 2,
    "productName":"Garden cart",
    "productCode":"GDN-0023",
    "releaseDate":"March 18, 2021",
    "description":"gallon capacity rolling gardern cart",
    "price":32.99,
    "starRating":4.2,
    "imageUrl":"assets/images/garden_cart.png"

  },
  {

    "productId": 5,
    "productName":"Hammer",
    "productCode":"TBX-0048",
    "releaseDate":"March 21, 2021",
    "description":"curved claw steel hammer",
    "price":8.9,
    "starRating":4.8,
    "imageUrl":"assets/images/hammer.png"
  }

  ];

  toggleImage(): void{
    this.showImage= !this.showImage;
  }
}