// create-guild.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  templateUrl: './create-guild.component.html',
  styleUrls: ['./create-guild.component.css'],
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  submitted = false;
  guilds: any[] = [];

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      notificationPreference: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.guildForm.invalid) {
      return;
    }

    this.guilds.push(this.guildForm.value);
    this.guildForm.reset();
    this.submitted = false;
  }
}
