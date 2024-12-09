import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { PlayersComponent } from './players/players.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';

export const routes: Routes = [
  { path: '', component: PlayersComponent },  // Default route
  { path: 'players', component: PlayersComponent },
  { path: 'create-character', component: CreateCharacterComponent },
  { path: 'create-guild', component: CreateGuildComponent },
  { path: 'character-faction', component: CharacterFactionComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'character-factions', component: CharacterFactionComponent },  // New path for character factions
  { path: '**', redirectTo: '/home', pathMatch: 'full' }  // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
