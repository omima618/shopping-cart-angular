import { LoaderInterceptor } from './../inertceptors/loader.interceptor';
import { LoaderService } from './../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  productsList: any = [];
  constructor(
    private productsService: ProductsServiceService,
    public loaderService: LoaderService
  ) {}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: any) => {
      this.productsList = products;
    });
  }
}
