import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule here
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: true,  // Make this component standalone
  imports: [ReactiveFormsModule, CommonModule]  // Add CommonModule to imports
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const { email, password } = this.signinForm.value;
    if (this.authService.signin(email, password)) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }
}
