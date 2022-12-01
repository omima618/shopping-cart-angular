import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  canLeave: boolean = true;
  constructor() {}
  setCanLeave(form: any, service: AuthService) {
    form.dirty === true
      ? (service.canLeave = false)
      : (service.canLeave = true);
  }
}
