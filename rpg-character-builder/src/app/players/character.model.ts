// src/app/players/players.component.ts

import { Component, OnInit } from '@angular/core';

// Inline definition of the Character interface
export interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  characters: Character[] = [
    { name: "Thorn", gender: "Male", class: "Warrior", faction: "The Iron Brotherhood", startingLocation: "Ironhold", funFact: "Thorn once single-handedly defeated a dragon." },
    { name: "Elara", gender: "Female", class: "Mage", faction: "Order of the Phoenix", startingLocation: "Mystic Falls", funFact: "Elara can control water at will." },
    { name: "Bane", gender: "Male", class: "Rogue", faction: "Shadow Clan", startingLocation: "Dark Hollow", funFact: "Bane is known for his unmatched stealth." },
    { name: "Lyra", gender: "Female", class: "Warrior", faction: "The Iron Brotherhood", startingLocation: "Ironhold", funFact: "Lyra wields a sword blessed by the gods." },
    { name: "Finn", gender: "Male", class: "Mage", faction: "Order of the Phoenix", startingLocation: "Mystic Falls", funFact: "Finn can manipulate lightning." },
    { name: "Nara", gender: "Female", class: "Rogue", faction: "Shadow Clan", startingLocation: "Dark Hollow", funFact: "Nara is a master of disguise." },
    { name: "Zane", gender: "Other", class: "Warrior", faction: "The Iron Brotherhood", startingLocation: "Ironhold", funFact: "Zane has unbreakable skin." },
    { name: "Astra", gender: "Female", class: "Mage", faction: "Order of the Phoenix", startingLocation: "Mystic Falls", funFact: "Astra can summon mythical creatures." },
    { name: "Rook", gender: "Male", class: "Warrior", faction: "The Iron Brotherhood", startingLocation: "Ironhold", funFact: "Rook once guarded a king single-handedly." },
    { name: "Vesper", gender: "Female", class: "Rogue", faction: "Shadow Clan", startingLocation: "Dark Hollow", funFact: "Vesper can move through shadows." }
  ];

  constructor() { }

  ngOnInit(): void { }
}
