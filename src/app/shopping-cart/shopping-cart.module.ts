import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

import { CardsComponent } from './cards/cards.component';
import { PanierComponent } from './panier/panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceComponent } from '../ecommerce/ecommerce.component';


@NgModule({
  declarations: [

    CardsComponent,
    PanierComponent,
    EcommerceComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ShoppingCartModule { }
