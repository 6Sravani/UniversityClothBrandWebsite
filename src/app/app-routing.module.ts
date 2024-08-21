import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { TrendingComponent } from './trending/trending.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'home',component: HomeComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  {path:'login',component:LoginComponent},
  {path:'women',component:WomenComponent},
  {path:'men',component:MenComponent},
  {path:'trending',component:TrendingComponent},
  {path:'accessories',component:AccessoriesComponent},
  { path: 'info', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
