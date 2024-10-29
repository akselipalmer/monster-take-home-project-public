import { inject, Injectable } from '@angular/core';
import { Auth, sendSignInLinkToEmail } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class EmailingService {
  private auth = inject(Auth);

  async sendAuthenticationEmail(email: string) {
    window.localStorage.setItem('emailForSignIn', email);
    const actionCodeSettings = {
      url: 'https://monster-take-home-projec-4b069.web.app/flight-info',
      handleCodeInApp: true,
    };

    try {
      const response = await sendSignInLinkToEmail(
        this.auth,
        email,
        actionCodeSettings
      );
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  constructor() {}
}
