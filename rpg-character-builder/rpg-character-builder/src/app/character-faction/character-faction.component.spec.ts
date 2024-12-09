import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CharacterFactionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should handle errors when data is not found', () => {
    component.fetchCharacterFactions();
    const request = httpMock.expectOne('http://localhost:3000/api/character-factions');
    request.flush([], { status: 500, statusText: 'Internal Server Error' });
    fixture.detectChanges();
    expect(component.errorMessage).toBe('Error fetching character factions. Please try again later.');
  });

  it('should correctly fetch a list of character factions', () => {
    component.fetchCharacterFactions();
    const request = httpMock.expectOne('http://localhost:3000/api/character-factions');
    expect(request.request.method).toBe('GET');
    request.flush([{ name: 'Faction 1', description: 'Description 1' }]);
    fixture.detectChanges();
    expect(component.characterFactions.length).toBe(1);
    expect(component.characterFactions[0].name).toBe('Faction 1');
  });

  it('should update the characterFactions div when character factions are found', () => {
    component.fetchCharacterFactions();
    const request = httpMock.expectOne('http://localhost:3000/api/character-factions');
    request.flush([{ name: 'Faction 1', description: 'Description 1' }]);
    fixture.detectChanges();
    const factionElements = fixture.nativeElement.querySelectorAll('tr');
    expect(factionElements.length).toBe(2); // 1 for the header row, 1 for the data row
  });
});
