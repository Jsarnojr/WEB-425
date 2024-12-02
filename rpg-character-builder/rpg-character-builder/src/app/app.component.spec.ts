import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // For ngFor and ngIf
import { PlayersComponent } from './players/players.component'; // Adjust path
import { CharacterFactionComponent } from './character-faction/character-faction.component'; // Adjust path
import { RouterTestingModule } from '@angular/router/testing'; // If routing is used

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,               // Provides ngFor and ngIf directives
        RouterTestingModule,        // If routing is used
      ],
      declarations: [
        AppComponent,               // Declare AppComponent
        PlayersComponent,           // Declare PlayersComponent if it's used
        CharacterFactionComponent,  // Declare CharacterFactionComponent if it's used
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();  // Trigger change detection to reflect the bindings
    const compiled = fixture.nativeElement as HTMLElement;
    // Make sure to match the selector where the title is rendered
    expect(compiled.querySelector('.content span')?.textContent).toContain('app is running!');
  });
});
