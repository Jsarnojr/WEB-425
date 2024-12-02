// character-faction.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule to use ngFor

@Component({
  selector: 'app-character-faction',
  template: `
    <div class="faction-selection">
      <h1>Choose Your Allegiance</h1>
      <button class="btn" *ngFor="let faction of factions">{{ faction }}</button>
    </div>
  `,
  styles: [`
    .faction-selection {
      background: #1a1a1a;
      color: #fff;
      padding: 20px;
      text-align: center;
      font-family: 'MedievalSharp', serif;
    }
    h1 {
      color: gold;
    }
    .btn {
      display: block;
      margin: 10px auto;
      padding: 10px;
      background-color: #6b4226;
      color: white;
      border: none;
      border-radius: 5px;
      width: 80%;
      font-size: 1.2rem;
      cursor: pointer;
    }
  `],
  standalone: true  // Marking the component as standalone
})
export class CharacterFactionComponent {
  factions = ['Knights of the Flame', 'Shadow Brotherhood', 'Order of the Arcane'];  // Example list of factions

  constructor() {
    // Logic for dynamically setting the factions can go here
  }
}
