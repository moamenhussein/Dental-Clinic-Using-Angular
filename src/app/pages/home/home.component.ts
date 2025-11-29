import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  services = [
    {
      title: 'Teeth Cleaning',
      description: 'Professional teeth cleaning to maintain oral health and prevent dental issues.',
      icon: '✨'
    },
    {
      title: 'Braces',
      description: 'Modern orthodontic solutions for straightening teeth and improving your smile.',
      icon: '🦷'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our cosmetic dental procedures and treatments.',
      icon: '💎'
    },
    {
      title: 'Dental Surgery',
      description: 'Expert surgical procedures performed by experienced dental surgeons.',
      icon: '⚕️'
    }
  ];
}

