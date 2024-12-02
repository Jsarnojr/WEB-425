import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { AppComponent } from './app.component';  // Import AppComponent
import { SigninComponent } from './signin/signin.component';  // Import SigninComponent
import { HeaderComponent } from './header/header.component';  // Import HeaderComponent
import { FooterComponent } from './footer/footer.component';  // Import FooterComponent

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,            // Import BrowserModule
    ReactiveFormsModule,      // Include ReactiveFormsModule for forms
    RouterModule,             // Include RouterModule for routing
    SigninComponent,          // Import SigninComponent directly
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
