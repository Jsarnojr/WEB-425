import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';

describe('GuildListComponent', () => {
  let fixture: ComponentFixture<GuildListComponent>;
  let component: GuildListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GuildListComponent, // Import as standalone
        CommonModule         // For common directives
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
