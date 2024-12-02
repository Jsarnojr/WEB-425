// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="logo">
        <h1>RPG Character Builder</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
