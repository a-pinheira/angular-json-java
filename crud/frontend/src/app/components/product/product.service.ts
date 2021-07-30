import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl =  "http://localhost:4200/products"
  
  constructor(private snackBar: MatSnackBar, private Http: HttpClient) { }

  showMessage(msg: string): void {
    //console.log(msg)
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  //será responsavel por inserir o produto no nosso backend
  create (product: Product): Observable<Product>{
    //interação com o backend
    //mandar requisição http para o back
    return this.Http.post<Product>(this.baseUrl, product)


  }
}
