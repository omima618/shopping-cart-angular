import { Store } from '@ngrx/store';
import { addToWishlist } from './../store/wishlist/wishlist.action';
import { LoaderService } from './../services/loader.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  productInfo: any = {};
  isLoggedIn: boolean = false;
  wishlistItems: any = [];
  constructor(
    private authService: AuthService,
    private productsService: ProductsServiceService,
    private router: ActivatedRoute,
    public LoaderService: LoaderService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    const params = this.router.snapshot.params;
    this.productsService
      .getProductInfo(params['id'])
      .subscribe((info) => (this.productInfo = info));
    // wishlist items
    this.store.select('wishlist').subscribe((res) => {
      this.wishlistItems = [...res.items];
    });
  }
  addToCartHandler(product: any) {
    const duplicatedItem = this.productsService.cartItems.filter(
      (item: any) => item.id == product.id
    );
    product.count == 0 ? (product.quantity = 0) : (product.quantity = 1);
    duplicatedItem.length == 0
      ? this.productsService.cartItems.push(product)
      : 0;
  }
  addToWishListHandler(item: any) {
    const duplicatedItems = this.wishlistItems.find((product: any) => {
      return product.id === item.id;
    });
    duplicatedItems ? 0 : this.wishlistItems.push(item);
    this.store.dispatch(addToWishlist({ products: this.wishlistItems }));
  }
}
