import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';  // Import your component

@NgModule({
  declarations: [],  // Declare the component
  imports: [
    CommonModule,  // CommonModule is necessary for ngIf, ngFor, etc.
    FormsModule,   // Import FormsModule for template-driven forms
    ReactiveFormsModule, // Import ReactiveFormsModule if you're using reactive forms
    CreateGuildComponent,
  ],
  exports: [],  // Export the component to use it in other modules
})
export class CreateGuildModule {}
