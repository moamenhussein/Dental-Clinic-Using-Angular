import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesComponent {
  services = [
    {
      title: 'Teeth Cleaning',
      description: 'Professional teeth cleaning removes plaque and tartar buildup, preventing cavities and gum disease. Our hygienists use advanced techniques to ensure a thorough and comfortable cleaning experience.',
      icon: '✨',
      features: ['Plaque Removal', 'Tartar Scaling', 'Polishing', 'Fluoride Treatment']
    },
    {
      title: 'Braces',
      description: 'Modern orthodontic solutions including traditional braces, clear aligners, and ceramic braces. We help straighten teeth and correct bite issues for a healthier, more confident smile.',
      icon: '🦷',
      features: ['Traditional Braces', 'Clear Aligners', 'Ceramic Braces', 'Retainers']
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our cosmetic dental procedures. From teeth whitening to veneers, we offer a range of treatments to enhance your appearance and boost your confidence.',
      icon: '💎',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeover']
    },
    {
      title: 'Dental Surgery',
      description: 'Expert surgical procedures performed by experienced oral surgeons. We handle everything from wisdom tooth extraction to dental implants with precision and care.',
      icon: '⚕️',
      features: ['Tooth Extraction', 'Dental Implants', 'Root Canal', 'Oral Surgery']
    }
  ];
}

