import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
  gradient: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'MACK (Managing Content & Knowledge)',
      description: 'Enterprise business management platform built with Angular and TypeScript',
      features: [
        'Developed 4 core modules: Invoice Management, Quotation Generation, Purchase Order, and Requisition Processing',
        'Automated document workflows reducing manual processing time',
        'Improved accuracy and efficiency in business operations',
        'Enterprise-level content management system'
      ],
      technologies: ['Angular', 'TypeScript', 'Material Design', 'Enterprise Solutions'],
      icon: 'file-earmark-text',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'Enterprise',
      demoUrl: 'https://procdemo.solverminds.net/main',  // ✅ Real demo URL
      isPrivate: true
    },
    {
      title: 'VigorBooks',
      description: 'A financial management software designed to simplify accounting processes for businesses',
      features: [
        'Manage transactions efficiently',
        'Generate comprehensive financial reports',
        'Automate financial calculations',
        'User-friendly interface for accounting tasks',
        'Real-time financial data tracking'
      ],
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Financial APIs'],
      icon: 'calculator',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'Finance',
      demoUrl: 'https://vigorbooks.com/',  // ✅ Real demo URL
      isPrivate: true
    },
    {
      title: 'CodeSpeedo',
      description: 'A code generation platform that simplifies mobile app development',
      features: [
        'Generate Ionic and Flutter code effortlessly',
        'Enhance developer productivity',
        'Automate repetitive coding tasks',
        'Support for multiple mobile frameworks',
        'Real-time code preview'
      ],
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Code Generation'],
      icon: 'code-square',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      category: 'Development Tools',
      demoUrl: 'http://app.codespeedo.com/',  // ✅ Real demo URL
      isPrivate: true
    },
    {
      title: 'Saraltoons',
      description: 'An animation-based application for creating and displaying dynamic animations',
      features: [
        'Create dynamic animations',
        'Interactive UI for animation editing',
        'Real-time animation preview',
        'Export animations in multiple formats',
        'User-friendly animation controls'
      ],
      technologies: ['LottieFiles', 'Ionic', 'Firebase', 'Animation APIs'],
      icon: 'play-circle',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      category: 'Creative',
      demoUrl: 'https://saraltoons.com/',  // ✅ Real demo URL
      isPrivate: true
    },
    {
      title: 'Saraltoons Pro',
      description: 'Advanced version with professional animation controls for power users',
      features: [
        'Advanced animation controls',
        'Professional-grade features',
        'Timeline-based editing',
        'Layer management system',
        'Export in HD quality'
      ],
      technologies: ['PixiJS', 'Ionic', 'Firebase', 'Advanced Animation'],
      icon: 'film',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      category: 'Creative',
      demoUrl: 'https://saraltoons.com/',  // ✅ Real demo URL
      isPrivate: true
    },
    {
      title: 'Kite Cultures',
      description: 'An interactive platform exploring the rich heritage and cultural significance of kite flying traditions worldwide',
      features: [
        'Explore different kite flying traditions from around the world',
        'Learn about historical significance and cultural festivals',
        'Interactive visual gallery showcasing various kite designs',
        'Community stories and cultural celebrations'
      ],
      technologies: ['Angular', 'TypeScript', 'Interactive UI', 'FireBase'],
      icon: 'wind',  // ✅ Better icon for kites
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffdde1 100%)',  // ✅ Colorful gradient
      category: 'Cultural',  // ✅ New category
      demoUrl: 'https://kitecultures.in/',  // ✅ Update with real URL
      isPrivate: true
    }
  ];

  categories = ['All', 'Enterprise', 'Finance', 'Development Tools', 'Creative'];
  selectedCategory = 'All';

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  // ✅ Check if GitHub URL exists and is not empty
  hasGitHubUrl(project: Project): boolean {
    return !!(project.githubUrl && project.githubUrl.trim() !== '');
  }

  // ✅ Check if Demo URL exists and is not empty
  hasDemoUrl(project: Project): boolean {
    return !!(project.demoUrl && project.demoUrl.trim() !== '');
  }

  // ✅ Open GitHub link
  openGitHub(url: string | undefined) {
    if (url && url.trim() !== '') {
      window.open(url, '_blank');
    }
  }

  // ✅ Open Demo link
  openDemo(url: string | undefined) {
    if (url && url.trim() !== '') {
      window.open(url, '_blank');
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Dhruv-Gyani-Resume.pdf';
    link.click();
  }
}