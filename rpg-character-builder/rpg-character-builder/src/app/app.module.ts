import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Import for routing
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import for forms (both template-driven and reactive forms)
import { GuildListComponent } from './guild-list/guild-list.component';  // Standalone component
import { CreateGuildModule } from './create-guild/create-guild.module';  // Feature module for creating a guild
import { CreateCharacterComponent } from './create-character/create-character.component';  // Standalone component
import { CreateGuildComponent } from './create-guild/create-guild.component';  // Another standalone component

@NgModule({
  declarations: [
    AppComponent,  // Declare the root component here
    // Standalone components like GuildListComponent and CreateCharacterComponent are not declared here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  // Set up routing for different paths
        { path: 'create-character', component: CreateCharacterComponent },
        { path: 'guild-list', component: GuildListComponent },
        { path: '', redirectTo: '/guild-list', pathMatch: 'full' },  // Default path redirect
    ]),
    FormsModule,  // For template-driven forms
    ReactiveFormsModule,  // For reactive forms
    GuildListComponent,  // Import standalone component here
    CreateCharacterComponent,  // Import another standalone component here
    CreateGuildComponent,  // Import CreateGuildComponent
  ],
  providers: [],
  bootstrap: [AppComponent],  // Bootstrap the root component
})
export class AppModule {}
