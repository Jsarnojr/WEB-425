import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  // Assuming AuthService is available in the app
import { CommonModule } from '@angular/common';  // Import CommonModule for ngIf

@Component({
  selector: 'app-header',
  standalone: true,  // Marking the component as standalone
  imports: [CommonModule], // Import CommonModule to use *ngIf and other directives
  template: `
    <header class="header">
      <div class="logo">
        <h1>RPG Character Builder</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Settings</a></li>
          <!-- Display user info if authenticated -->
          <li *ngIf="isAuthenticated">
            <span class="user-info">{{ userInfo?.username }}</span>
          </li>
          <!-- Display Sign In if not authenticated -->
          <li *ngIf="!isAuthenticated">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userInfo: any;  // This will hold user data
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    // Listen for authentication state changes
    this.authService.getAuthState().subscribe(authState => {
      this.isAuthenticated = authState;  // Update authentication status
      if (this.isAuthenticated) {
        this.userInfo = this.authService.getUserInfo();  // Fetch user info if authenticated
      }
    });
  }
}
