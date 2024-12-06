import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { CreateGuildComponent } from './create-guild.component'; // Import CreateGuildComponent

@NgModule({
  declarations: [CreateGuildComponent], // Declare the CreateGuildComponent here
  exports: [CreateGuildComponent],      // Export CreateGuildComponent to be used in other modules
  imports: [
    CommonModule, // Import CommonModule for common directives like ngIf, ngFor, etc.
    FormsModule,  // Import FormsModule for template-driven forms
    ReactiveFormsModule // Import ReactiveFormsModule for reactive forms
  ]
})
export class CreateGuildModule {}
