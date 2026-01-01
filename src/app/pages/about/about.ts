import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  info = {
    name: 'Dhruv Gyani',
    location: 'Udaipur, Rajasthan',
    email: 'dhruvgyanii@gmail.com',
    phone: '+91 9351286165',
    education: 'Bachelor of Computer Applications (BCA)',
    university: 'Mohanlal Sukhadia University',
    cgpa: '8.39',
    yearRange: '2021 – 2024'
  };

  highlights = [
    {
      icon: 'clock-history',
      title: '3+ Years',
      description: 'Professional Experience'
    },
    {
      icon: 'award',
      title: 'Certified',
      description: 'Programming & Web Development'
    },
    {
      icon: 'graph-up',
      title: 'Performance',
      description: '45% faster load times'
    },
    {
      icon: 'bug',
      title: 'Quality',
      description: '50% reduction in bugs'
    }
  ];

  interests = [
    { icon: 'code-slash', name: 'Coding' },
    { icon: 'palette', name: 'UI/UX Design' },
    { icon: 'lightbulb', name: 'Innovation' },
    { icon: 'people', name: 'Collaboration' }
  ];
}
