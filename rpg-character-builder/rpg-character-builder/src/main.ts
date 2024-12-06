import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import AppComponent
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';  // Import the routes directly

// Bootstrap the app using the standalone AppComponent and routing
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Use the routes directly here
  ]
}).catch(err => console.error(err));
