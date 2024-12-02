import { Component } from '@angular/core';

interface Character {
  id: number;
  name: string;
  class: string;
  level: number;
  race: string;
}

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  model: Character = {
    id: 0,
    name: '',
    class: '',
    level: 1,
    race: ''
  };

  characters: Character[] = [];

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter(): void {
    this.model.id = this.generateRandomId();
    this.characters.push({ ...this.model });
    this.resetForm();
  }

  resetForm(): void {
    this.model = {
      id: 0,
      name: '',
      class: '',
      level: 1,
      race: ''
    };
  }
}
