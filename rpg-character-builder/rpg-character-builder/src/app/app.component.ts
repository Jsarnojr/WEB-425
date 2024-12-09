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

  // Handler for when a character is created
  onCharacterCreated(character: Character): void {
    console.log('Character Created:', character);
    this.characters.push(character); // Add the created character to the characters list
  }

  // Handler for when a guild is created
  onGuildCreated(guild: Guild): void {
    console.log('Guild Created:', guild);
    this.guilds.push(guild); // Add the created guild to the guilds list
  }

  // Example function to handle the character (for logging or further processing)
  handleCharacter(character: Character): void {
    console.log('Character:', character);
  }
}
