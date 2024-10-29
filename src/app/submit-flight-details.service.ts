import { inject, Injectable } from '@angular/core';
import { FlightInfoPayload } from './flight-info-form/flight-info-payload';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class SubmitFlightDetailsService {
  private functions = inject(Functions);

  constructor() {}

  async submitFlightTicket(ticketData: FlightInfoPayload) {
    try {
      const submitFlightDetails = httpsCallable(
        this.functions,
        'submitFlightDetails'
      );
      const response = await submitFlightDetails(ticketData);
      return response;
    } catch (error) {
      console.error('Error submitting flight details:', error);
      return error;
    }
  }
}
