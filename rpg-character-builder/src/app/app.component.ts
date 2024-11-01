import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import RouterModule for routerLink
  template: `
    <nav>
      <a routerLink="/signin">Sign In</a>
      <a routerLink="/players">Players</a>
      <a routerLink="/create-character">Create Character</a>
      <a routerLink="/create-guild">Create Guild</a>
      <a routerLink="/character-faction">Character Faction</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 15px;
      margin: 20px;
    }
    nav a {
      text-decoration: none;
      color: blue;
      font-weight: bold;
    }
    nav a:hover {
      color: darkblue;
    }
  `]
})
export class AppComponent {}
