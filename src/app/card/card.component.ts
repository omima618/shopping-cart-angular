import { addToWishlist } from './../store/wishlist/wishlist.action';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../services/products-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  isLoggedIn: boolean = false;
  wishlistItems: any = [];

  constructor(
    private router: Router,
    private productsService: ProductsServiceService,
    private authService: AuthService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.store.select('wishlist').subscribe((res) => {
      this.wishlistItems = [...res.items];
    });
  }
  ngDoCheck(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  @Input() product: any = {};
  clickHandler() {
    this.router.navigate(['/product-info', this.product.id]);
  }
  addToCartHandler(item: any) {
    const duplicatedItem = this.productsService.cartItems.filter(
      (product: any) => product.id == item.id
    );
    item.count == 0 ? (item.quantity = 0) : (item.quantity = 1);
    duplicatedItem.length == 0 ? this.productsService.cartItems.push(item) : 0;
  }
  addToWishlist(item: any) {
    this.wishlistItems.indexOf(item) === -1 ? this.wishlistItems.push(item) : 0;
    this.store.dispatch(addToWishlist({ products: this.wishlistItems }));
  }
}
