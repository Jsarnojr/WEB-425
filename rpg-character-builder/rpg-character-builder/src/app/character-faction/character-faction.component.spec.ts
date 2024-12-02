import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { CommonModule } from '@angular/common'; // Import CommonModule to provide ngFor
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule if routing is involved

describe('CharacterFactionComponent', () => {
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let component: CharacterFactionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,               // Import CommonModule to provide ngFor
        RouterTestingModule,        // Import RouterTestingModule if routing is involved
      ],
      declarations: [CharacterFactionComponent], // Declare the component here
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger initial change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();  // Check if the component is created successfully
  });

  it('should display the correct number of factions', () => {
    // Assuming factions is an array in your component
    component.factions = ['Faction 1', 'Faction 2', 'Faction 3']; // Set the data to be used in the test
    fixture.detectChanges();  // Trigger change detection to reflect data changes

    const compiled = fixture.nativeElement as HTMLElement;
    const factionList = compiled.querySelectorAll('.faction'); // Make sure you are selecting the right class
    expect(factionList.length).toBe(3);  // Check if the number of factions rendered is 3
  });
});
