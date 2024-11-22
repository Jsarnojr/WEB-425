import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { authGuard } from './guards/auth.guard';

// Define application routes
export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Redirect to signin by default
  { path: 'signin', component: SigninComponent },
  { path: 'players', component: PlayersComponent },
  {
    path: 'create-character',
    component: CreateCharacterComponent,
    canActivate: [authGuard], // Protected route
  },
  { path: 'create-guild', component: CreateGuildComponent },
  { path: 'character-faction', component: CharacterFactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
