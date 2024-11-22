import { Component } from '@angular/core';

// Define the Character interface
export interface Character {
  id: number;
  name: string;
  gender: string;
  characterClass: string;
}

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  // Define an array to store created characters, typed as Character[]
  characters: Character[] = [];

  // Define an object to store the form data, typed as Character
  character: Character = {
    id: 0,  // Placeholder for the generated ID
    name: '',
    gender: '',
    characterClass: ''
  };

  // This function generates a random character ID between 1 and 1000
  generateCharacterId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  // Function to add a new character
  addCharacter() {
    const newCharacter: Character = {
      id: this.generateCharacterId(),
      name: this.character.name,
      gender: this.character.gender,
      characterClass: this.character.characterClass
    };

    this.characters.push(newCharacter);

    // Reset form after adding the character
    this.resetForm();
  }

  // Reset form function to clear all fields
  resetForm() {
    this.character = {
      id: 0,
      name: '',
      gender: '',
      characterClass: ''
    };
  }
}
