import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Array<any> = [];
  totalPrice: number = 0;
  constructor(private productsService: ProductsServiceService) {}
  ngOnInit(): void {
    this.items = this.productsService.cartItems;
    this.calcTotalPrice();
  }
  removeItemHandler(item: any) {
    this.productsService.cartItems.splice(item, 1);
    this.calcTotalPrice();
  }
  calcTotalPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + +item.price * item.quantity;
    }, 0);
  }

  increaseQuantity(i: number) {
    this.productsService.cartItems[i].quantity++;
    this.calcTotalPrice();
  }
  decreaseQuantity(i: number) {
    this.productsService.cartItems[i].quantity--;
    this.calcTotalPrice();
  }
}
