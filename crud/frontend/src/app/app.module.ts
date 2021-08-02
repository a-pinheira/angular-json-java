import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { HttpClientModule } from '@angular/common/http';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/** Imports Material Design */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    RedDirective,
    ForDirective,
  ],
  imports: [
    BrowserModule,
//    MatSliderModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  // é aqui em providers q se coloca os services qnd tem a
  // necessidade deles aparecerem fora do módulo
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
