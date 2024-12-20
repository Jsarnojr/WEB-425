import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Ensure the standalone component is imported
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // This ensures that the template is updated after component initialization
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h1');  // Select the <h1> tag

    // Ensure the title element exists
    expect(titleElement).not.toBeNull();

    // Now check if the text content of the <h1> element contains the expected text
    expect(titleElement.textContent).toContain('Hello, portfolio');
  });
});
