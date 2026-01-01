import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experiences {
  company: string;
  position: string;
  duration: string;
  location?: string;
  type: 'work' | 'training';
  description: string[];
  technologies: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

  experiences: Experiences[] = [
    {
      company: 'Sanglob Business Services',
      position: 'Frontend Developer (Angular)',
      duration: 'July 2025 - Present',
      type: 'work',
      current: true,
      description: [
        'Developing MACK (Managing Content & Knowledge) platform using Angular and TypeScript for enterprise content management',
        'Implementing responsive UI components with Material Design, improving user workflow efficiency',
        'Collaborating with cross-functional teams to deliver scalable solutions',
        'Building maintainable and reusable component architecture'
      ],
      technologies: ['Angular', 'TypeScript', 'Material Design', 'Enterprise Solutions']
    },
    {
      company: 'CrocoCode Pvt Ltd',
      position: 'Frontend Developer',
      duration: 'February 2023 - April 2025',
      type: 'work',
      description: [
        'Developed responsive and scalable Angular applications, reducing UI bugs by 60%',
        'Improved page load speed by 45% through performance optimization techniques',
        'Implemented interactive UI components and animations, improving user engagement',
        'Collaborated with cross-functional teams to build maintainable and reusable codebases',
        'Optimized website performance for seamless user experience'
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'CSS/SCSS', 'Performance Optimization']
    },
    {
      company: 'Sarvesh Software Pvt Ltd',
      position: 'Frontend Development Training',
      duration: 'September 2022 - February 2023',
      type: 'training',
      description: [
        'Completed a 6-month hands-on training in frontend development',
        'Gained expertise in UI/UX best practices and responsive design',
        'Learned cross-browser compatibility techniques',
        'Built multiple projects using modern web technologies',
        'Received certification in Programming & Web Development'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular', 'C++', 'Data Structures']
    }
  ];

  stats = [
    {
      icon: 'calendar-check',
      value: '3+',
      label: 'Years Experience',
      color: '#0dcaf0'
    },
    {
      icon: 'building',
      value: '3',
      label: 'Companies',
      color: '#198754'
    },
    {
      icon: 'speedometer2',
      value: '45%',
      label: 'Performance Boost',
      color: '#ffc107'
    },
    {
      icon: 'bug-fill',
      value: '50%',
      label: 'Bug Reduction',
      color: '#dc3545'
    }
  ];
}
