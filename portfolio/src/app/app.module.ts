import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule

// Import standalone components directly
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,  // Declare the root app component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Import routing module
    HomeComponent,  // Import standalone components
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
