import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Ensure the routes are imported

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Add the routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
