import { Location, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './confirm-email.component.html',
})
export class ConfirmEmailComponent {
  router: Router = inject(Router);
  location: Location = inject(Location);
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  auth = inject(Auth);
  email = window.localStorage.getItem('emailForSignIn');

  handleSubmit() {
    if (!this.emailForm.value.email) {
      return;
    }
    window.localStorage.setItem('emailForSignIn', this.emailForm.value.email);
    return this.router.navigate(['flight-info']);
  }
}
