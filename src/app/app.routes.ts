import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
