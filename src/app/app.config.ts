import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: process.env['PROJECT_ID'],
        appId: process.env['APP_ID'],
        storageBucket: process.env['STORAGE_BUCKET'],
        apiKey: process.env['API_KEY'],
        authDomain: process.env['AUTH_DOMAIN'],
        messagingSenderId: process.env['MESSAGING_SENDER_ID'],
        measurementId: process.env['MEASUREMENT_ID'],
      })
    ),
    provideFunctions(() => getFunctions()),
  ],
};
