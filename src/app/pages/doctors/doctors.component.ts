import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class DoctorsComponent {
  doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'General Dentistry',
      experience: '15 years',
      image: '👩‍⚕️',
      bio: 'Expert in preventive care and general dental treatments with a focus on patient comfort.'
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Orthodontics',
      experience: '12 years',
      image: '👨‍⚕️',
      bio: 'Specialized in braces and orthodontic treatments, helping patients achieve perfect smiles.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialization: 'Cosmetic Dentistry',
      experience: '10 years',
      image: '👩‍⚕️',
      bio: 'Passionate about creating beautiful smiles through advanced cosmetic dental procedures.'
    },
    {
      name: 'Dr. James Wilson',
      specialization: 'Oral Surgery',
      experience: '18 years',
      image: '👨‍⚕️',
      bio: 'Experienced oral surgeon specializing in complex dental surgeries and implant procedures.'
    },
    {
      name: 'Dr. Lisa Anderson',
      specialization: 'Pediatric Dentistry',
      experience: '8 years',
      image: '👩‍⚕️',
      bio: 'Dedicated to providing gentle and caring dental treatment for children of all ages.'
    },
    {
      name: 'Dr. Robert Taylor',
      specialization: 'Periodontics',
      experience: '14 years',
      image: '👨‍⚕️',
      bio: 'Expert in gum disease treatment and periodontal care to maintain healthy gums.'
    }
  ];
}

