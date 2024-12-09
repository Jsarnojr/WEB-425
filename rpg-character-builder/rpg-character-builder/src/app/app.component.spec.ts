import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; // Import your component
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent
import { CreateCharacterComponent } from './create-character/create-character.component'; // Import CreateCharacterComponent
import { CreateGuildModule } from './create-guild/create-guild.module'; // Import CreateGuildModule

// Correctly import DynamicTestModule
import { DynamicTestModule } from './testing/dynamic-test.module';  // Correct import path

import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service'; // AuthService for mocking
import { of } from 'rxjs';
import { provideRouter } from '@angular/router'; // Router dependency for tests

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    // Mock AuthService methods
    mockAuthService = jasmine.createSpyObj('AuthService', ['getAuthState', 'signout']);
    mockAuthService.getAuthState.and.returnValue(of(false)); // Mocked authentication state

    // Configure the testing module
    await TestBed.configureTestingModule({
      imports: [
        CommonModule, // Necessary for *ngIf, *ngFor
        HeaderComponent, // Import standalone HeaderComponent
        FooterComponent, // Import standalone FooterComponent
        CreateGuildModule, // Import the module with the CreateGuild component
        DynamicTestModule, // Import the DynamicTestModule here
        provideRouter([]), // Provide routing if needed
      ],
      declarations: [AppComponent], // Declare AppComponent here
      providers: [
        { provide: AuthService, useValue: mockAuthService }, // Use the mocked AuthService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Sign In" when not authenticated', () => {
    const compiled = fixture.nativeElement;
    const signInLink = compiled.querySelector('a[routerLink="/signin"]');
    expect(signInLink).toBeTruthy();
    expect(signInLink.textContent).toContain('Sign In');
  });

  it('should display "Sign Out" when authenticated', () => {
    component.isAuthenticated = true; // Set the authentication state to true
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement;
    const signOutLink = compiled.querySelector('a');
    expect(signOutLink).toBeTruthy();
    expect(signOutLink.textContent).toContain('Sign Out');
  });

  it('should call signout on AuthService when Sign Out link is clicked', () => {
    component.isAuthenticated = true;
    fixture.detectChanges();

    const signOutLink = fixture.nativeElement.querySelector('a');
    signOutLink.click(); // Simulate click
    expect(mockAuthService.signout).toHaveBeenCalled(); // Verify if signout method was called
  });

  it('should correctly handle auth state changes', () => {
    mockAuthService.getAuthState.and.returnValue(of(true)); // Simulate auth state change
    fixture.detectChanges();
    expect(component.isAuthenticated).toBeTrue();
  });
});

// Test for CreateCharacterComponent
describe('CreateCharacterComponent', () => {
  it('should create the CreateCharacterComponent', () => {
    const fixture = TestBed.createComponent(CreateCharacterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
