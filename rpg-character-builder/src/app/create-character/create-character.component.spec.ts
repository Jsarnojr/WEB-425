import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCharacterComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    const id = component.generateRandomId();
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    const mockForm = {
      valid: true,
      value: { name: 'Test', gender: 'Male', class: 'Mage' },
      resetForm: jasmine.createSpy('resetForm'),
    };

    component.onSubmit(mockForm);
    expect(component.characters.length).toBe(1);
    expect(component.characters[0]).toEqual(
      jasmine.objectContaining({
        name: 'Test',
        gender: 'Male',
        characterClass: 'Mage',
      })
    );
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    const mockForm = {
      resetForm: jasmine.createSpy('resetForm'),
    };

    component.resetForm(mockForm);
    expect(mockForm.resetForm).toHaveBeenCalled();
  });
});
