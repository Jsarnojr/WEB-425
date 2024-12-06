import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngFor

@Component({
  standalone: true,
  selector: 'app-guild-list',
  templateUrl: './guild-list.component.html',
  styleUrls: ['./guild-list.component.css'],
  imports: [CommonModule]  // Add CommonModule here
})
export class GuildListComponent {
  // component logic
}
