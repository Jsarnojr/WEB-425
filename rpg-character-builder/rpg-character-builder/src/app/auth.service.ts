import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';  // For session management
import { Router } from '@angular/router';  // For programmatic navigation

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);  // Authentication state
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();  // Observable for auth state
  signOut: any;

  constructor(
    private cookieService: CookieService,  // Cookie handling
    private router: Router  // For navigation (e.g., sign-out redirection)
  ) {
    // Check if a session cookie exists to determine if the user is authenticated
    const storedToken = this.cookieService.get('session_user');
    if (storedToken) {
      this.isAuthenticatedSubject.next(true);  // If token exists, user is authenticated
    }
  }

  // Returns the auth state observable
  getAuthState() {
    return this.isAuthenticated$;
  }

  // Sign in method that checks if the user's credentials are valid
  signin(email: string, password: string): boolean {
    const users = [
      { email: 'user1@example.com', password: 'password123' },
      { email: 'user2@example.com', password: 'password456' },
    ];

    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (user) {
      this.cookieService.set('session_user', user.email);  // Store session with email
      this.isAuthenticatedSubject.next(true);  // Set authentication state to true
      return true;  // Return success
    }

    this.isAuthenticatedSubject.next(false);  // Invalid login
    return false;  // Return failure
  }

  // Sign out method to clear the session cookie and redirect
  signout(): void {
    this.cookieService.delete('session_user');  // Clear session cookie
    this.isAuthenticatedSubject.next(false);  // Set auth state to false
    this.router.navigate(['/signin']);  // Redirect to sign-in page after logout
  }

  // Fetch the current user's email
  getUserEmail(): string {
    return this.cookieService.get('session_user') || '';  // Return email if exists or empty string
  }

  // Fetch user info (for now, just return user email)
  getUserInfo(): { email: string } | null {
    const email = this.getUserEmail();  // Reuse getUserEmail method
    return email ? { email } : null;  // Return email info or null if not authenticated
  }

  // Optional: Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }
}
