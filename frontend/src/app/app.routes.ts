import { Routes } from '@angular/router';
import { AboutClinicComponent } from './content/about-clinic/about-clinic.component';
import { OurTeamComponent } from './content/our-team/our-team.component';
import { OfferComponent } from './content/offer/offer.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { AppointmentsComponent } from './content/appointments/appointments.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'o-poradni', component: AboutClinicComponent },
    { path: 'zespol', component: OurTeamComponent },
    { path: 'oferta', component: OfferComponent },
    { path: 'terminy', component: AppointmentsComponent },
    { path: 'kontakt', component: ContactComponent }
];
