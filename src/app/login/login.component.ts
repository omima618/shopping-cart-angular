import { AuthService } from './../services/auth.service';
import { ProductsServiceService } from './../services/products-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  submitHundler() {
    this.authService.isLoggedIn = true;
  }
}
