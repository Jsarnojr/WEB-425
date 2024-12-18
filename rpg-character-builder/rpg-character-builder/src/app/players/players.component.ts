// players.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
  level: number; // Add the level property here
}

@Component({
  standalone: true, // Add this flag
  selector: 'app-players',
  imports: [CommonModule, FormsModule],  // Import both CommonModule and FormsModule
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  characters: Character[] = [
    {
      id: 1,
      name: 'Player 1',
      gender: 'Male',
      class: 'Warrior',
      faction: 'Neutral',
      startingLocation: 'Forest',
      funFact: 'Loves exploration',
      level: 1
    },
    {
      id: 2,
      name: 'Player 2',
      gender: 'Female',
      class: 'Mage',
      faction: 'Alliance',
      startingLocation: 'Castle',
      funFact: 'Speaks to animals',
      level: 2
    }
  ];
onSubmit: any;

  ngOnInit(): void {
    // Logic to fetch characters if any, for now we'll use a static list
  }
}
