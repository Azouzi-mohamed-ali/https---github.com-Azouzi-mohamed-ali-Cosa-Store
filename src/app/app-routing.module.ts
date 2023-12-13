import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { Products } from './products/products';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'shop', component: EcommerceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent},
 { path: 'contact', component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
