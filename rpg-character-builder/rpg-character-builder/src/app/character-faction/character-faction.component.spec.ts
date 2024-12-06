import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { CommonModule } from '@angular/common'; // Import for ngFor

describe('CharacterFactionComponent', () => {
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let component: CharacterFactionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterFactionComponent, // Standalone component
        CommonModule               // Required for *ngFor
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); // Verify component creation
  });

  it('should display the correct number of factions', () => {
    component.factions = ['Faction 1', 'Faction 2', 'Faction 3']; // Set test data
    fixture.detectChanges(); // Update the DOM after setting factions

    const compiled = fixture.nativeElement as HTMLElement;
    const factionButtons = compiled.querySelectorAll('.btn'); // Select buttons
    expect(factionButtons.length).toBe(3); // Expect 3 buttons to be rendered
  });
});
