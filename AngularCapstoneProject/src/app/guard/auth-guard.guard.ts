import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../guardService/auth-service.service'

export const authGuardGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthServiceService)
  const router = inject(Router)
  
  if (!authService.isAuthenticatedUser()) {
    alert("you are not eligible to see product details,Please login!!")
    router.navigate(['/login'])
    return false;
  }
  return true;
};
