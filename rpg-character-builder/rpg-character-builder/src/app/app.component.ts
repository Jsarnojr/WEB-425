import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'; // For authentication handling
import { Character } from './models/character.model'; // Path to Character model
import { Guild } from './models/guild.model'; // Path to Guild model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RPG Character Builder';
  isAuthenticated: boolean = false; // Track authentication state
  email: string = ''; // Track authenticated user's email
  characters: Character[] = []; // Array to store created characters
  guilds: Guild[] = []; // Array to store created guilds

  // Example Character for handleCharacter method
  character: Character = {
    name: 'Hero',
    class: 'Warrior',
    level: 1,
    id: 0,
    race: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAuthState().subscribe((authState) => {
      this.isAuthenticated = authState;
      if (authState) {
        this.email = 'user@example.com'; // Replace with real user data
      }
    });
  }

  signout(): void {
    this.authService.signout();
  }

  onCharacterCreated(character: Character): void {
    this.characters.push(character);
  }

  onGuildCreated(guild: Guild): void {
    this.guilds.push(guild);
  }

  handleCharacter(character: Character): void {
    console.log('Character:', character);
  }
}
