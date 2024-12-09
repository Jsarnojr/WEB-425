import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Guild {
  name: string;
  members: number;
  leader: string;
}

@Component({
  selector: 'app-create-guild',
  standalone: true, // Mark as standalone component
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule here
  template: `
    <form [formGroup]="guildForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="guildName">Guild Name:</label>
        <input id="guildName" formControlName="guildName" required />
        <div *ngIf="submitted && guildForm.controls['guildName'].errors" class="error">
          Guild name is required.
        </div>
      </div>

      <div>
        <label for="description">Description:</label>
        <input id="description" formControlName="description" required />
        <div *ngIf="submitted && guildForm.controls['description'].errors" class="error">
          Description is required.
        </div>
      </div>

      <div>
        <label for="type">Type:</label>
        <input id="type" formControlName="type" required />
        <div *ngIf="submitted && guildForm.controls['type'].errors" class="error">
          Type is required.
        </div>
      </div>

      <div>
        <label for="notificationPreference">Notification Preference:</label>
        <input id="notificationPreference" formControlName="notificationPreference" required />
        <div *ngIf="submitted && guildForm.controls['notificationPreference'].errors" class="error">
          Notification preference is required.
        </div>
      </div>

      <div>
        <label>
          <input type="checkbox" formControlName="acceptTerms" /> Accept Terms
        </label>
        <div *ngIf="submitted && guildForm.controls['acceptTerms'].errors" class="error">
          You must accept the terms.
        </div>
      </div>

      <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
    </form>

    <h3>Created Guilds:</h3>
    <ul>
      <li *ngFor="let guild of guilds">
        {{ guild.name }} - Leader: {{ guild.leader }} - Members: {{ guild.members }}
      </li>
    </ul>
  `,
  styleUrls: ['./create-guild.component.css'],
})
export class CreateGuildComponent {
  @Output() guildCreated = new EventEmitter<Guild>(); // Event emitter for created guilds

  guildForm: FormGroup; // Form group for the guild form
  submitted = false; // Tracks form submission status
  guilds: Guild[] = []; // Local array to store created guilds

  constructor(private fb: FormBuilder) {
    // Initialize the reactive form with validation rules
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required], // Guild name is required
      description: ['', Validators.required], // Description is required
      type: ['', Validators.required], // Type is required
      notificationPreference: ['', Validators.required], // Notification preference is required
      acceptTerms: [false, Validators.requiredTrue], // Checkbox must be checked
    });
  }

  // Getter for form controls to easily access them
  get f() {
    return this.guildForm.controls;
  }

  // Handles form submission
  onSubmit(): void {
    this.submitted = true;

    // Prevent submission if the form is invalid
    if (this.guildForm.invalid) {
      return;
    }

    // Create a new guild object
    const guild: Guild = {
      name: (this.f['guildName'] as FormControl).value, // Access form value with explicit casting
      leader: (this.f['type'] as FormControl).value, // Access form value with explicit casting
      members: 0, // Default members count
    };

    // Emit the guild to the parent component
    this.guildCreated.emit(guild);

    // Add guild to the local array
    this.guilds.push(guild);

    // Reset the form after submission
    this.guildForm.reset();
    this.submitted = false;
    this.f['acceptTerms'].setValue(false); // Reset checkbox
  }
}
