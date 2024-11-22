// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { empId: 1, email: 'user@example.com', password: 'password123' },
  ];
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private cookieService: CookieService) {}

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      this.cookieService.set('session_user', email);
      this.authState.next(true);
      return true;
    }
    this.authState.next(false);
    return false;
  }

  signout() {
    this.cookieService.delete('session_user');
    this.authState.next(false);
  }
}
