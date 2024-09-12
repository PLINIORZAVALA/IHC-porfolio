import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            AboutComponent,
            ContactComponent,
            ExperienceComponent,
            ProjectsComponent,
            SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porfolio';
}
