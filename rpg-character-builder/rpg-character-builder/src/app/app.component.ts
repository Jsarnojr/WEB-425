import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';  // Import AuthService
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // Mark as a standalone component
  imports: [
    RouterOutlet,  // For routing views
    RouterLink,    // For router links
    HeaderComponent,  // Include HeaderComponent
    FooterComponent,  // Include FooterComponent
    CommonModule,   // Include CommonModule for ngIf
  ],
  template: `
    <app-header></app-header>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/players" routerLinkActive="active">Players</a>
      <a routerLink="/create-character" routerLinkActive="active">Create Character</a>
      <a routerLink="/create-guild" routerLinkActive="active">Create Guild</a>
      <a routerLink="/character-faction" routerLinkActive="active">Character Faction</a>
      <a *ngIf="!isAuthenticated" routerLink="/signin" routerLinkActive="active">Sign In</a>
      <a *ngIf="isAuthenticated" (click)="signout()">Sign Out</a>
    </nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit {
  title = 'RPG Character Builder';
  isAuthenticated: boolean = false;  // Track authentication state

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to auth state changes
    this.authService.getAuthState().subscribe((authState) => {
      this.isAuthenticated = authState;
    });
  }

  // Handle sign out
  signout(): void {
    this.authService.signout();
  }
}
