import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
import { CommonModule } from '@angular/common';  // Import CommonModule for Angular directives
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel support
import { By } from '@angular/platform-browser';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent, CommonModule, FormsModule],  // Import the standalone component here
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Forge Your Destiny" button', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();  // Ensure button exists
    expect(button.textContent).toContain('Forge Your Destiny');
  });

  it('should generate a random character ID between 1 and 1000', () => {
    const randomId = component.generateRandomId();
    expect(randomId).toBeGreaterThanOrEqual(1);
    expect(randomId).toBeLessThanOrEqual(1000);
    expect(randomId).toBe(Math.floor(randomId)); // Ensure no decimals
  });

  it('should add a character with correct customization', () => {
    component.model.name = 'Aragorn';
    component.model.class = 'Ranger';
    component.model.level = 10;
    component.model.race = 'Human';

    // Call the addCharacter method
    component.addCharacter();
    fixture.detectChanges();  // Trigger change detection

    // Ensure the character is added to the characters array
    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Aragorn');
    expect(component.characters[0].class).toBe('Ranger');
    expect(component.characters[0].level).toBe(10);
    expect(component.characters[0].race).toBe('Human');
    expect(component.characters[0].id).toBeGreaterThan(0); // Ensure ID is generated
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    // Set some values for the model
    component.model.name = 'Gandalf';
    component.model.class = 'Wizard';
    component.model.level = 20;
    component.model.race = 'Maiar';

    // Call resetForm
    component.resetForm();
    fixture.detectChanges();  // Trigger change detection to update the view

    // Ensure the model has been reset to default values
    expect(component.model.name).toBe('');
    expect(component.model.class).toBe('');
    expect(component.model.level).toBe(1);
    expect(component.model.race).toBe('');
  });

  it('should display characters correctly', () => {
    // Add some test characters
    component.characters = [
      {
        name: 'John', class: 'Warrior', level: 1,
        id: 0,
        race: ''
      },
      {
        name: 'Sarah', class: 'Mage', level: 2,
        id: 0,
        race: ''
      }
    ];
    fixture.detectChanges();

    const characterElements = fixture.debugElement.queryAll(By.css('.character-item'));

    // Check if two character elements are displayed
    expect(characterElements.length).toBe(2);

    // Check if character names, class, and levels are displayed correctly
    expect(characterElements[0].nativeElement.textContent).toContain('John');
    expect(characterElements[0].nativeElement.textContent).toContain('Warrior');
    expect(characterElements[0].nativeElement.textContent).toContain('Level: 1');

    expect(characterElements[1].nativeElement.textContent).toContain('Sarah');
    expect(characterElements[1].nativeElement.textContent).toContain('Mage');
    expect(characterElements[1].nativeElement.textContent).toContain('Level: 2');
  });

  it('should display a message when the character list is empty', () => {
    component.characters = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const message = compiled.querySelector('.no-characters-message');
    expect(message).toBeTruthy();
    expect(message.textContent).toContain('No characters found');
  });
});
