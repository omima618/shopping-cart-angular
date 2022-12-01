import { removeFromWishlist } from './../store/wishlist/wishlist.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  items: any = [];
  constructor(private store: Store<any>, private router: Router) {}
  ngOnInit(): void {
    this.store.select('wishlist').subscribe((res) => {
      this.items = [...res.items];
    });
  }
  showInfoHnadler(product: any) {
    this.router.navigate(['/product-info', product.id]);
  }
  removeItemHandler(i: number) {
    this.items.splice(i, 1);
    this.store.dispatch(removeFromWishlist({ products: this.items }));
  }
}
