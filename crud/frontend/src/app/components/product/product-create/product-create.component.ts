import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
 //teste para fazer um bind
 //atributoX = "qualquer"

product: Product = {
  name: '',
  price: 1.00
}
  //injetando um service
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    //acessando os métodos de productService
    //this.productService.showOnConsole('teste...')
    //this.productService.showMessage('Operação executada com sucesso')
  }
  //chamando a partir de uma botão
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  /*
 fazerAlgo(): void {
    console.log('Fazendo algo!')
   }
   */
}
