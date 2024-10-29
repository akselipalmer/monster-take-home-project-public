import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailingService } from '../emailing.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  emailService: EmailingService = inject(EmailingService);
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  submitted = false;
  async handleSubmit() {
    if (!this.emailForm.value.email) {
      return;
    }
    await this.emailService.sendAuthenticationEmail(this.emailForm.value.email);
    this.submitted = true;
  }
}
