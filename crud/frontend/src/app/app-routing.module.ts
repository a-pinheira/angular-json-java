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
    path: "products",
    /**Segunda Rota - Componente de Cadastro de Produto*/
    component: ProductCrudComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
