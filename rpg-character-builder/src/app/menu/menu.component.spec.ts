// menu.component.spec.ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

// Define a simple DummyComponent to serve as a placeholder for routed components
@Component({ template: '' })
class DummyComponent {}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent, DummyComponent], // Add DummyComponent here
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: DummyComponent },
        { path: 'about', component: DummyComponent },
        { path: 'contact', component: DummyComponent }
      ])]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the MenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to "Home" with the correct routerLink', () => {
    const homeLink = fixture.debugElement.query(By.css('[data-test-id="home-link"]'));
    expect(homeLink.attributes['ng-reflect-router-link']).toBe('/home');
  });

  it('should have a link to "About" with the correct routerLink', () => {
    const aboutLink = fixture.debugElement.query(By.css('[data-test-id="about-link"]'));
    expect(aboutLink.attributes['ng-reflect-router-link']).toBe('/about');
  });

  it('should have a link to "Contact" with the correct routerLink', () => {
    const contactLink = fixture.debugElement.query(By.css('[data-test-id="contact-link"]'));
    expect(contactLink.attributes['ng-reflect-router-link']).toBe('/contact');
  });

  it('should navigate to "Home" when the Home link is clicked', async () => {
    const homeLink = fixture.debugElement.query(By.css('[data-test-id="home-link"]')).nativeElement;

    spyOn(router, 'navigateByUrl');
    homeLink.click();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});
