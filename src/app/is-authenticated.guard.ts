import { inject } from '@angular/core';
import {
  Auth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);
  const email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    return router.navigate(['confirm-email']);
  }

  if (isSignInWithEmailLink(auth, window.location.href)) {
    return signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        window.localStorage.removeItem('emailForSignIn');
        return true;
      })
      .catch((error) => {
        console.log(error);
        return router.navigate(['unauthorized']);
      });
  }
  return router.navigate(['unauthorized']);
};
