import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home - Dental Clinic' },
  { path: 'about', component: AboutComponent, title: 'About Us - Dental Clinic' },
  { path: 'services', component: ServicesComponent, title: 'Services - Dental Clinic' },
  { path: 'doctors', component: DoctorsComponent, title: 'Our Doctors - Dental Clinic' },
  { path: 'appointments', component: AppointmentsComponent, title: 'Book Appointment - Dental Clinic' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us - Dental Clinic' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
