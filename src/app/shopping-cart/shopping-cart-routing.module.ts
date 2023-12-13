import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { EcommerceComponent } from '../ecommerce/ecommerce.component';




const routes: Routes = [
  { path: 'panier', component: PanierComponent},
  { path: 'ecommerce', component: EcommerceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
