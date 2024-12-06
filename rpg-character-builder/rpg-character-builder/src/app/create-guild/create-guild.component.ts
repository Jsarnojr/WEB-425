import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guild } from '../models/guild.model';  // Correct path to guild.model.ts

@Component({
  selector: 'app-create-guild',
  template: `
    <form [formGroup]="guildForm" (ngSubmit)="onSubmit()">
      <label>
        Guild Name:
        <input formControlName="guildName" required />
      </label>
      <label>
        Description:
        <input formControlName="description" required />
      </label>
      <label>
        Type:
        <input formControlName="type" required />
      </label>
      <label>
        Notification Preference:
        <input formControlName="notificationPreference" required />
      </label>
      <label>
        Accept Terms:
        <input type="checkbox" formControlName="acceptTerms" />
      </label>
      <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
    </form>
  `,
  styleUrls: ['./create-guild.component.css'],
})
export class CreateGuildComponent {
  @Output() guildCreated = new EventEmitter<Guild>(); // Output event to notify parent component

  guildForm: FormGroup;  // Define the form group
  submitted = false;      // Flag for form submission
  guilds: Guild[] = [];  // Array to hold created guilds

  constructor(private fb: FormBuilder) {
    // Initialize form group with validation
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      notificationPreference: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  // Getter for easier access to form controls in the template
  get f() {
    return this.guildForm.controls;
  }

  // Submit the form
  onSubmit(): void {
    this.submitted = true;

    // If form is invalid, return early
    if (this.guildForm.invalid) {
      return;
    }

    // Create Guild object from the form data
    const guild: Guild = {
      name: this.guildForm.value.guildName,
      leader: this.guildForm.value.type, // You can modify this based on your requirements
      members: 0, // Default value or dynamic, adjust as per logic
    };

    // Emit the created guild to the parent component
    this.guildCreated.emit(guild);

    // Optional: Add the created guild to the guilds array (or handle it in other ways)
    this.guilds.push(guild);

    // Reset the form and clear the submitted flag
    this.guildForm.reset();
    this.submitted = false;

    // Optional: reset acceptTerms checkbox after submission
    this.guildForm.controls['acceptTerms'].setValue(false);
  }
}
