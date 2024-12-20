import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importing CommonModule if necessary for built-in directives

@Component({
  selector: 'app-projects',
  standalone: true, // Marking the component as standalone
  imports: [CommonModule], // Importing CommonModule if necessary for built-in directives
  template: `
    <h2>My Projects</h2>
    <p>Currently, my projects are unavailable as they are under development. Please check back soon!</p>
  `,
})
export class ProjectsComponent {}
