// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface User {
  empId: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Simulated array of users with empId, email, and password
  private users: User[] = [
    { empId: '1', email: 'user1@example.com', password: 'password123' },
    { empId: '2', email: 'user2@example.com', password: 'password456' },
  ];

  // Auth state to track whether the user is logged in or not
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private cookieService: CookieService, private router: Router) {}

  // Returns the auth state as an observable
  getAuthState() {
    return this.authState.asObservable();
  }

  // Signin method that checks if the user exists in the array
  signin(email: string, password: string): boolean {
    // Check if user exists in the users array based on email and password
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      // If user is authenticated, set a session cookie
      this.cookieService.set('session_user', email);
      // Update authState to true (authenticated)
      this.authState.next(true);
      return true; // Successful authentication
    } else {
      // If user is not found, return false and set authState to false
      this.authState.next(false);
      return false; // Authentication failed
    }
  }

  // Sign out method to clear cookies and set authState to false
  signout(): void {
    // Delete the session cookie
    this.cookieService.delete('session_user');
    // Set auth state to false (not authenticated)
    this.authState.next(false);
    // Redirect to sign-in page
    this.router.navigate(['/signin']);
  }
}
