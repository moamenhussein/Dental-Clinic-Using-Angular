import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppointmentsComponent {
  appointmentForm: FormGroup;
  services = [
    'Teeth Cleaning',
    'Braces',
    'Cosmetic Dentistry',
    'Dental Surgery',
    'General Consultation',
    'Root Canal',
    'Teeth Whitening',
    'Dental Implants'
  ];
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  getMinDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.appointmentForm.valid) {
      // Simulate form submission
      console.log('Appointment booked:', this.appointmentForm.value);
      this.success = true;
      this.appointmentForm.reset();
      this.submitted = false;
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.success = false;
      }, 5000);
    }
  }
}

