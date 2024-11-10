// players.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { By } from '@angular/platform-browser';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PlayersComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of characters', () => {
    const characterCards = fixture.debugElement.queryAll(By.css('.character-card'));
    expect(characterCards.length).toBe(component.characters.length);
    characterCards.forEach((card, index) => {
      const nameElement = card.query(By.css('h3')).nativeElement;
      expect(nameElement.textContent).toContain(component.characters[index].name);
    });
  });
});
