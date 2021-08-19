import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";


/*Primeiro Objeto: array do tipo Routes*/
const routes: Routes = [
  {
  /**VAntagens do Typescript
   * Elementos tipados se consegue ter o Code Complete
   * Propriedade do Objetos */

  path: "",
  /**Primeira Rota */
  component: HomeComponent
  },
  {
    /**Segunda Rota - Componente de Cadastro de Produto*/
    path: "products",
    component: ProductCrudComponent
    
  },
  /** Rota do produto create */
  {
    path: "products/create",
    component: ProductCreateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
