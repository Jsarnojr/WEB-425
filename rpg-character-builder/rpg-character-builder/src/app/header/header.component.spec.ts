import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '../auth.service';  // Assuming you have an AuthService
import { of } from 'rxjs';  // To mock AuthService methods

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    // Mock AuthService
    mockAuthService = jasmine.createSpyObj('AuthService', ['getAuthState']);
    mockAuthService.getAuthState.and.returnValue(of(true)); // Mocking a logged-in user

    // Configure testing module with the mock AuthService
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService }  // Use mocked AuthService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user info if authenticated', () => {
    // Assuming HeaderComponent displays user info when authenticated
    component.isAuthenticated = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const userInfo = compiled.querySelector('.user-info'); // Update selector as per your template
    expect(userInfo).toBeTruthy();
  });

  it('should not display user info if not authenticated', () => {
    // Check that user info is not shown when not authenticated
    component.isAuthenticated = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const userInfo = compiled.querySelector('.user-info'); // Update selector as per your template
    expect(userInfo).toBeNull();
  });
});
