import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubmitFlightDetailsService } from '../submit-flight-details.service';
import { NgClass, NgIf } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-flight-info-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './flight-info-form.component.html',
})
export class FlightInfoFormComponent {
  auth = inject(Auth);
  flightInfoService: SubmitFlightDetailsService = inject(
    SubmitFlightDetailsService
  );
  flightInfoForm = new FormGroup({
    airline: new FormControl('', Validators.required),
    arrivalDate: new FormControl('', Validators.required),
    arrivalTime: new FormControl('', Validators.required),
    flightNumber: new FormControl('', Validators.required),
    numOfGuests: new FormControl(1, [Validators.required, Validators.min(1)]),
    comments: new FormControl(''),
  });
  status: 'none' | 'pending' | 'success' | 'error' = 'none';
  async handleSubmit() {
    this.status = 'pending';
    if (
      !this.flightInfoForm.value.airline ||
      !this.flightInfoForm.value.arrivalDate ||
      !this.flightInfoForm.value.arrivalTime ||
      !this.flightInfoForm.value.flightNumber ||
      this.flightInfoForm.value.comments === null
    ) {
      this.status = 'error';
      console.log('data is messed up');
      return;
    }
    if (
      this.flightInfoForm.value.numOfGuests === null ||
      this.flightInfoForm.value.numOfGuests === undefined
    ) {
      this.flightInfoForm.value.numOfGuests = 1;
    }

    try {
      const confirmation = await this.flightInfoService.submitFlightTicket({
        airline: this.flightInfoForm.value.airline,
        arrivalDate: this.flightInfoForm.value.arrivalDate,
        arrivalTime: this.flightInfoForm.value.arrivalTime,
        flightNumber: this.flightInfoForm.value.flightNumber,
        numOfGuests: this.flightInfoForm.value.numOfGuests,
        comments: this.flightInfoForm.value.comments,
      });
      if (confirmation) {
        await signOut(this.auth);
        return (this.status = 'success');
      } else {
        return (this.status = 'error');
      }
    } catch (error) {
      this.status = 'error';
      return error;
    }
  }
}
