import { TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';  // Adjust the path to your PlayersComponent
import { CommonModule } from '@angular/common'; // If you need ngFor or any other common directives

describe('PlayersComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersComponent],  // Declare the component
      imports: [CommonModule],            // Import CommonModule to use ngFor if necessary
    }).compileComponents();  // Compiles the components asynchronously
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PlayersComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy(); // Check if the component is created successfully
  });
});
