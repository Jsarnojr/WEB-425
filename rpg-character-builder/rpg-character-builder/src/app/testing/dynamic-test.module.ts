// src/app/testing/dynamic-test.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service'; // Correct path to AuthService

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Import CommonModule for *ngIf, *ngFor, etc.
    RouterModule.forRoot([]), // Provide empty routes or configure routes as needed
  ],
  providers: [
    AuthService, // Provide AuthService for testing
  ]
})
export class DynamicTestModule {}
