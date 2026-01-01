import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'code-slash',
      skills: [
        { name: 'Angular', level: 95, icon: '🅰️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'JavaScript', level: 90, icon: '📜' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3/SCSS', level: 90, icon: '🎨' },
        { name: 'Ionic Framework', level: 85, icon: '📱' }
      ]
    },
    {
      title: 'UI/UX & Styling',
      icon: 'palette',
      skills: [
        { name: 'Bootstrap', level: 90, icon: '🅱️' },
        { name: 'Material UI', level: 85, icon: '🎭' },
        { name: 'Responsive Design', level: 95, icon: '📱' },
        { name: 'Animations', level: 80, icon: '✨' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'tools',
      skills: [
        { name: 'Firebase', level: 80, icon: '🔥' },
        { name: 'SQL', level: 75, icon: '🗄️' },
        { name: 'Git', level: 85, icon: '📦' },
        { name: 'GitHub', level: 85, icon: '🐙' },
        { name: 'PixiJS', level: 70, icon: '🎮' }
      ]
    },
    {
      title: 'Core Competencies',
      icon: 'lightbulb',
      skills: [
        { name: 'Performance Optimization', level: 85, icon: '⚡' },
        { name: 'Code Quality', level: 90, icon: '✅' },
        { name: 'Problem Solving', level: 90, icon: '🧩' },
        { name: 'Team Collaboration', level: 95, icon: '🤝' }
      ]
    }
  ];

  programmingLanguages = [
    { name: 'C++', level: 75, color: '#00599C' },
    { name: 'Data Structures', level: 80, color: '#FF6B6B' }
  ];

  achievements = [
    {
      icon: 'speedometer2',
      title: '45% Faster',
      description: 'Page load speed improvements'
    },
    {
      icon: 'bug-fill',
      title: '50% Reduction',
      description: 'UI bugs in applications'
    },
    {
      icon: 'code-square',
      title: 'Clean Code',
      description: 'Maintainable & reusable codebases'
    },
    {
      icon: 'people-fill',
      title: 'Team Player',
      description: 'Cross-functional collaboration'
    }
  ];
}
