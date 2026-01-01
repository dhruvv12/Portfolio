import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'github', url: 'https://github.com/dhruvv12', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/dhruv-gyani', label: 'LinkedIn' },
    { icon: 'envelope', url: 'mailto:dhruvgyanii@gmail.com', label: 'Email' },
    { icon: 'telephone', url: 'tel:+919351286165', label: 'Phone' }
  ];
}