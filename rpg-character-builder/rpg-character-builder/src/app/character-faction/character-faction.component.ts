import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-faction',
  templateUrl: './character-faction.component.html',
  styleUrls: ['./character-faction.component.css']
})
export class CharacterFactionComponent implements OnInit {
  characterFactions: { name: string, description: string }[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCharacterFactions();
  }

  fetchCharacterFactions(): void {
    this.http.get<{ name: string, description: string }[]>('http://localhost:3000/api/character-factions')
      .subscribe({
        next: (data) => {
          this.characterFactions = data;
        },
        error: (err) => {
          this.errorMessage = 'Error fetching character factions. Please try again later.';
        }
      });
  }
}
