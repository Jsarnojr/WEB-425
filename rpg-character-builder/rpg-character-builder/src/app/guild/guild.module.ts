// guild.module.ts (Guild-related module)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for Angular directives
import { CreateGuildComponent } from '../create-guild/create-guild.component';  // Correct path to CreateGuildComponent

// Added Guild interface
// guild.model.ts
export interface Guild {
  name: string;                         // Guild name
  description: string;                  // Add description property
  type: string;                         // Add type property
  notificationPreference: string;       // Add notificationPreference property
  leader: string;                       // You can modify this based on your needs
  members: number;                      // Number of guild members
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule  // Import CommonModule for common Angular directives like *ngIf, *ngFor
  ],
  exports: [],  // Export if you need it in other modules
})
export class GuildModule {}
