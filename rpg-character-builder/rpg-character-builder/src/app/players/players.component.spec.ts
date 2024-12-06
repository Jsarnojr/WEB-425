import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';  // Adjusted import path
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';  // Adjusted import path
import { of } from 'rxjs';

describe('PlayersComponent', () => {
  let fixture: ComponentFixture<PlayersComponent>;
  let component: PlayersComponent;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    // Mock the AuthService methods
    mockAuthService = jasmine.createSpyObj('AuthService', ['getAuthState', 'signout']);
    mockAuthService.getAuthState.and.returnValue(of(false));  // Mock initial authentication state

    await TestBed.configureTestingModule({
      imports: [
        PlayersComponent,           // Import PlayersComponent here (not declare)
        RouterTestingModule,        // Mock RouterTestingModule for routing
        CommonModule                // Import CommonModule for *ngIf, *ngFor, etc.
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }  // Provide the mocked AuthService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger change detection to initialize the component
  });

  it('should create the Players component', () => {
    expect(component).toBeTruthy();
  });

  // Add other test cases specific to PlayersComponent
});
