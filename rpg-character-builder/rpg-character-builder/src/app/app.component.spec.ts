import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; // Import AppComponent
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent (standalone)
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent (standalone)
import { CreateCharacterComponent } from './create-character/create-character.component'; // Import CreateCharacterComponent (standalone)
import { CreateGuildModule } from './create-guild/create-guild.module'; // Import CreateGuildModule
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

// Define the DynamicTestModule
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule], // Ensure CommonModule is imported for *ngFor, *ngIf, etc.
  exports: [],
})
export class DynamicTestModule {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    // Mock the AuthService methods
    mockAuthService = jasmine.createSpyObj('AuthService', ['getAuthState', 'signout']);
    mockAuthService.getAuthState.and.returnValue(of(false)); // Mock initial authentication state

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // Mock RouterTestingModule for routing
        CommonModule, // Import CommonModule for *ngIf, *ngFor, etc.
        HeaderComponent, // Import standalone HeaderComponent
        FooterComponent, // Import standalone FooterComponent
        CreateGuildModule, // Import CreateGuildModule here
        DynamicTestModule, // Import the DynamicTestModule here to use CreateGuildComponent in tests
      ],
      declarations: [AppComponent], // Declare AppComponent here
      providers: [
        { provide: AuthService, useValue: mockAuthService }, // Provide the mocked AuthService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection to initialize the component
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
    component.isAuthenticated = true; // Simulate user authentication
    fixture.detectChanges(); // Trigger change detection

    const signOutLink = fixture.nativeElement.querySelector('a');
    signOutLink.click(); // Simulate click on "Sign Out" link

    expect(mockAuthService.signout).toHaveBeenCalled(); // Verify that signout method was called
  });

  it('should correctly handle auth state changes', () => {
    mockAuthService.getAuthState.and.returnValue(of(true)); // Simulate a change in auth state
    fixture.detectChanges(); // Trigger change detection
    expect(component.isAuthenticated).toBeTrue(); // Verify that the component reflects the updated state
  });
});

describe('CreateCharacterComponent', () => {
  it('should create the CreateCharacterComponent', () => {
    const fixture = TestBed.createComponent(CreateCharacterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
