import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateGuildComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  // Test Case 1: Form initialization
  it('should initialize the form with default values and be invalid', () => {
    const form = component.guildForm;
    expect(form).toBeDefined();
    expect(form.valid).toBeFalse();

    // Check initial form control values
    expect(form.controls['guildName'].value).toBe('');
    expect(form.controls['description'].value).toBe('');
    expect(form.controls['type'].value).toBe('');
    expect(form.controls['notificationPreference'].value).toBe('');
    expect(form.controls['acceptTerms'].value).toBeFalse();
  });

  // Test Case 2: Validation
  it('should be valid when all fields are filled correctly', () => {
    const form = component.guildForm;

    form.controls['guildName'].setValue('Warriors Guild');
    form.controls['description'].setValue('A competitive guild for serious players.');
    form.controls['type'].setValue('Competitive');
    form.controls['notificationPreference'].setValue('Email');
    form.controls['acceptTerms'].setValue(true);

    expect(form.valid).toBeTrue();
  });

  // Test Case 3: Submission prevention without terms acceptance
  it('should prevent form submission if terms are not accepted', () => {
    const form = component.guildForm;

    form.controls['guildName'].setValue('Mages Guild');
    form.controls['description'].setValue('A guild for magic enthusiasts.');
    form.controls['type'].setValue('Educational');
    form.controls['notificationPreference'].setValue('In-App');
    form.controls['acceptTerms'].setValue(false); // Terms not accepted

    component.onSubmit(); // Attempt to submit

    expect(component.submitted).toBeTrue(); // Form was attempted
    expect(component.guilds.length).toBe(0); // No guild should be added
    expect(form.valid).toBeFalse(); // Form should still be invalid
  });
});
