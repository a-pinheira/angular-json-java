import { ProductService } from './../../product/product.service';
import { Product } from './../../product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
      = [];
  //products: Product[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //Injeta para consumir
    this.productService.read().subscribe(products => {
      this.products = this.products
      console.log(products);      
    })
  }

}
