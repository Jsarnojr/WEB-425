import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { AuthService } from '../auth.service';  // Mock AuthService if necessary

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,  // Include necessary modules like ReactiveFormsModule
        SigninComponent,      // Import the standalone SigninComponent
      ],
      providers: [AuthService],  // Add providers if needed, like AuthService for dependency injection
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Ensure the component is created
  });

  it('should render a button with "Begin Quest"', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toBe('Begin Quest');  // Ensure the button text is "Begin Quest"
  });
});
