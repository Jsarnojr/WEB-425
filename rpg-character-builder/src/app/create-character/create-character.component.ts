import { Component } from '@angular/core';

interface Character {
  id: number;
  name: string;
  gender: string;
  characterClass: string;
}

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent {
  characters: Character[] = [];

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const newCharacter: Character = {
        id: this.generateRandomId(),
        name: form.value.name,
        gender: form.value.gender,
        characterClass: form.value.class,
      };

      this.characters.push(newCharacter);
      this.resetForm(form);
    }
  }

  resetForm(form: any): void {
    form.resetForm();
  }
}
