import { Routes } from '@angular/router';
import { Home } from './pages/home/home';  // ✅ Changed
import { About } from './pages/about/about';  // ✅ Changed
import { Skills } from './pages/skills/skills';  // ✅ Changed
import { Experience } from './pages/experience/experience';  // ✅ Changed
import { Projects } from './pages/projects/projects';  // ✅ Changed
import { Contact } from './pages/contact/contact';  // ✅ Changed

export const routes: Routes = [
  { path: '', component: Home, title: 'Dhruv Gyani - Portfolio' },
  { path: 'about', component: About, title: 'About - Dhruv Gyani' },
  { path: 'skills', component: Skills, title: 'Skills - Dhruv Gyani' },
  { path: 'experience', component: Experience, title: 'Experience - Dhruv Gyani' },
  { path: 'projects', component: Projects, title: 'Projects - Dhruv Gyani' },
  { path: 'contact', component: Contact, title: 'Contact - Dhruv Gyani' },
  { path: '**', redirectTo: '' }
];