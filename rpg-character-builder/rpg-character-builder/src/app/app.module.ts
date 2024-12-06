import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateCharacterComponent } from './create-character/create-character.component';  // Import the standalone component
import { CharacterListComponent } from './character-list/character-list.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { GuildListComponent } from './guild-list/guild-list.component';
import { GuildModule } from './guild/guild.module';  // Import GuildModule
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import FormsModules
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CreateGuildModule } from './create-guild/create-guild.module';  // Import CreateGuildModule

@NgModule({
  declarations: [
    AppComponent,               // Declare the main AppComponent
    CharacterListComponent,     // Declare CharacterListComponent
       // Import CreateCharacterComponent (standalone component)
    // No need to declare CreateCharacterComponent here if it's standalone
  ],
  imports: [
    BrowserModule,              // Import BrowserModule for basic browser support
    RouterModule.forRoot([]),   // Include RouterModule with the root routes
    FormsModule,                // Import FormsModule for template-driven forms
    ReactiveFormsModule,        // Include ReactiveFormsModule for reactive forms
    GuildModule,                // Import GuildModule if it contains components related to guilds
    CreateCharacterComponent,
    CommonModule,               // Import CommonModule to fix ngForOf error
    CreateGuildModule,          // Import CreateGuildModule
    GuildListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]     // Bootstrap the main AppComponent
})
export class AppModule {}
