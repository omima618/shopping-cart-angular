import { Store } from '@ngrx/store';
import { ProductsServiceService } from './../services/products-service.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: any = false;
  wishlistLength: number = 0;
  constructor(
    private authService: AuthService,
    public productsService: ProductsServiceService,
    private store: Store<any>
  ) {}
  ngOnInit(): void {
    this.store.select('wishlist').subscribe((res) => {
      this.wishlistLength = res.items.length;
    });
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  ngDoCheck(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  logoutHandler() {
    this.authService.isLoggedIn = false;
  }
}
