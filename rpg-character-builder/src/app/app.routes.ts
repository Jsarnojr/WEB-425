import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';

// Define application routes
export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Redirect to signin by default
  { path: 'players', component: PlayersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'create-character', component: CreateCharacterComponent },
  { path: 'create-guild', component: CreateGuildComponent },
  { path: 'character-faction', component: CharacterFactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
