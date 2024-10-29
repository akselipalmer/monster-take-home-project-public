import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightInfoFormComponent } from './flight-info-form/flight-info-form.component';
import { isAuthenticatedGuard } from './is-authenticated.guard';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'App Home Page' },
  {
    path: 'flight-info',
    component: FlightInfoFormComponent,
    canActivate: [isAuthenticatedGuard],
    title: 'Flight Info Form',
  },
  {
    path: 'confirm-email',
    component: ConfirmEmailComponent,
    title: 'Confirm Email',
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
    title: 'Unauthorized',
  },
];
