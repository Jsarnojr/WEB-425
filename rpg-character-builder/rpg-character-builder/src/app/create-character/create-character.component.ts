import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // If you are using *ngIf or *ngFor in the template
import { FormsModule } from '@angular/forms';

// Updated Character interface
export interface Character {
  id: number;
  name: string;
  class: string;
  level: number;
  race: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true, // Marking the component as standalone
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent {
  // EventEmitter to notify the parent component when a character is created
  @Output() characterCreated = new EventEmitter<Character>();

  // Model to store character data
  model: Character = {
    id: 0,
    name: '',
    class: '',
    level: 1,
    race: '',
  };

  // Array to store the list of characters
  characters: Character[] = [];
onSubmit: any;

  // Generate a random ID for each character
  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  // Add character to the list
  addCharacter(): void {
    this.model.id = this.generateRandomId(); // Assign a random ID
    this.characters.push({ ...this.model }); // Add a copy of the model to the characters list
    this.characterCreated.emit(this.model); // Emit the created character to parent
    this.resetForm(); // Reset the form after adding the character
  }

  // Reset the form after submitting the character
  resetForm(): void {
    this.model = {
      id: 0,
      name: '',
      class: '',
      level: 1,
      race: '',
    };
  }
}
