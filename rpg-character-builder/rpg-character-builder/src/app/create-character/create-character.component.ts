import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define the Character interface
export interface Character {
  id: number;
  name: string;
  class: string;
  level: number;
  race: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true, // Marking as a standalone component
  imports: [CommonModule, FormsModule], // Importing CommonModule and FormsModule
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent {
  // Event emitter to notify the parent component
  @Output() characterCreated = new EventEmitter<Character>();

  // Model to bind to the form
  model: Character = {
    id: 0,
    name: '',
    class: '',
    level: 1,
    race: '',
  };

  // List of characters (for demonstration purposes)
  characters: Character[] = [];

  // Function to generate a random ID
  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1; // Generate a random ID for the character
  }

  // Add the character to the list and emit it to the parent component
  addCharacter(): void {
    if (this.model.name && this.model.class && this.model.race) {
      this.model.id = this.generateRandomId(); // Assign a random ID to the model
      this.characters.push({ ...this.model }); // Add a copy of the model to the characters array
      this.characterCreated.emit(this.model); // Emit the character to the parent component
      this.resetForm(); // Reset the form after submission
    } else {
      console.log('Please complete all fields');
    }
  }

  // Reset the form
  resetForm(): void {
    this.model = {
      id: 0,
      name: '',
      class: '',
      level: 1,
      race: '',
    };
  }

  // Handling the player name form submission
  playerName: string = '';

  // Form submission logic
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Player Name Submitted:', this.playerName);
    } else {
      console.log('Form is invalid');
    }
  }
}
