import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { ProductsServiceService } from './../services/products-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private roter: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,32}/
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }
  ngDoCheck(): void {}
  get formControls() {
    return this.signupForm.controls;
  }
  changeHandler() {
    this.authService.setCanLeave(this.signupForm, this.authService);
  }
  submitHandler() {
    this.authService.isLoggedIn = true;
    this.authService.canLeave = true;
    this.roter.navigate(['/productsList']);
  }
  ngOnInit(): void {}
}
