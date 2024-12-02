import { Routes } from '@angular/router';

// Importing your components
import { SigninComponent } from './signin/signin.component';
import { PlayersComponent } from './players/players.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { AuthGuard } from './auth.guard';  // Import the AuthGuard

// Define your routes
export const routes: Routes = [
  { path: '', component: SigninComponent },  // Default route, pointing to SignIn page
  { path: 'signin', component: SigninComponent },  // SignIn route
  { path: 'players', component: PlayersComponent },  // Players route
  { path: 'create-character', component: CreateCharacterComponent },  // Create Character route
  { path: 'create-guild', component: CreateGuildComponent },  // Create Guild route
  { path: 'character-faction', component: CharacterFactionComponent },  // Character Faction route
  { path: '**', redirectTo: '/signin' }  // Wildcard route for any invalid URL, redirects to SignIn page
];
