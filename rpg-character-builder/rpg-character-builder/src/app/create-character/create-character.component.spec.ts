import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],  // Add FormsModule for ngModel support
      declarations: [CreateCharacterComponent]
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
});
