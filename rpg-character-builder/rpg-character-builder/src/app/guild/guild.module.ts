// guild.module.ts (Guild-related module)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for Angular directives
import { CreateGuildComponent } from '../create-guild/create-guild.component';  // Correct path to CreateGuildComponent

// Added Guild interface
export interface Guild {
  name: string;
  members: number;
  leader: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule  // Import CommonModule for common Angular directives like *ngIf, *ngFor
  ],
  exports: [],  // Export if you need it in other modules
})
export class GuildModule {}
