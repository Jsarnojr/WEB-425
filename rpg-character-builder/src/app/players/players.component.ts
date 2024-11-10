import { Component } from '@angular/core';

// Define the interface for a character (optional but recommended for type safety)
interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  // Declare and initialize the characters array
  characters: Character[] = [
    {
      name: 'Thorn',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Thorn once single-handedly defeated a dragon.'
    },
    {
      name: 'Lyra',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Silver Order',
      startingLocation: 'Silver Peak',
      funFact: 'Lyra once learned the secrets of the ancient magi.'
    },
    {
      name: 'Derek',
      gender: 'Male',
      class: 'Rogue',
      faction: 'The Shadow Guild',
      startingLocation: 'Moonlight Forest',
      funFact: 'Derek has never been caught in his entire career.'
    },
    {
      name: 'Fiona',
      gender: 'Female',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Fiona fought off a band of marauding orcs at the age of 16.'
    },
    {
      name: 'Kelvin',
      gender: 'Male',
      class: 'Mage',
      faction: 'The Order of Light',
      startingLocation: 'Crystal Cave',
      funFact: 'Kelvin can summon fireballs with a snap of his fingers.'
    },
    {
      name: 'Astrid',
      gender: 'Female',
      class: 'Rogue',
      faction: 'The Nightblade',
      startingLocation: 'Ebonreach',
      funFact: 'Astrid once escaped a deadly trap with only a dagger.'
    },
    {
      name: 'Zephos',
      gender: 'Other',
      class: 'Mage',
      faction: 'The Forgotten Ones',
      startingLocation: 'Ancient Ruins',
      funFact: 'Zephos can manipulate time, but only for short moments.'
    },
    {
      name: 'Kara',
      gender: 'Female',
      class: 'Warrior',
      faction: 'The Crimson Legion',
      startingLocation: 'Stormkeep',
      funFact: 'Kara is the only warrior to defeat a dragon and live.'
    },
    {
      name: 'Varek',
      gender: 'Male',
      class: 'Rogue',
      faction: 'The Black Hand',
      startingLocation: 'Darkmoor',
      funFact: 'Varek is known for his stealth and agility.'
    },
    {
      name: 'Elara',
      gender: 'Female',
      class: 'Mage',
      faction: 'The Silver Order',
      startingLocation: 'Starfall',
      funFact: 'Elara once froze an entire river with a single spell.'
    }
  ];
}
