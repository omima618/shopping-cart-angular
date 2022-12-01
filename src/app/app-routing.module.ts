import { WishlistComponent } from './wishlist/wishlist.component';
import { ConfirmLeaveGuard } from './guards/confirm-leave.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductInfoComponent } from './product-info/product-info.component';
const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'shopping-cart-angular',
    component: ProductsListComponent,
  },
  {
    path: 'productsList',
    component: ProductsListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
    canDeactivate: [ConfirmLeaveGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product-info/:id',
    component: ProductInfoComponent,
  },
  {
    path: 'cart/:id',
    component: CartComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
